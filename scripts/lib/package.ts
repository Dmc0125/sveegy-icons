import fs from 'fs/promises'
import path from 'path'

import { capitalize } from './utils/create-components'

const VUE_PACKAGE_PATH = path.join(__dirname, '../../packages/vue')
const SVELTE_PACKAGE_PATH = path.join(__dirname, '../../packages/svelte/package')

const createIndexDeclarationsVue = async (srcPath: string) => {
  const vueStrokeDeclarations = `declare const defStroke: DefineComponent<__VLS_DefinePropsToOptions<{
    size?: string | undefined;
    color?: string | undefined;
    strokeWidth?: string | undefined;
  }>,
  () => void,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  Record<string, any>,
  string,
  VNodeProps & AllowedComponentProps & ComponentCustomProps,
  Readonly<ExtractPropTypes<__VLS_DefinePropsToOptions<{
    size?: string | undefined;
    color?: string | undefined;
    strokeWidth?: string | undefined;
  }>>>,
  {}
>;`
  const vueFillDeclarations = vueStrokeDeclarations.replace(/\s+strokeWidth\?: string \| undefined;/g, '').replace('defStroke', 'defFill')
  const vueDeclarations = `
import { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes, PropType } from 'vue'
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_DefinePropsToOptions<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? {
    type: PropType<__VLS_NonUndefinedable<T[K]>>;
  } : {
    type: PropType<T[K]>;
    required: true;
  };
};
${vueStrokeDeclarations}\n${vueFillDeclarations}\nexport {\n  #exports\n}`.trim()

  const strokeFilenames = await fs.readdir(`${srcPath}/src/lib/stroke`)
  const fillFilenames = await fs.readdir(`${srcPath}/src/lib/fill`)
  const componentsExports = [...strokeFilenames, ...fillFilenames].map((filename) => {
    const _type = filename.match(/Stroke|Fill/)!
    return `def${_type} as ${filename.split('.')[0]},`
  })
  await fs.writeFile(`${srcPath}/package/index.d.ts`, vueDeclarations.replace('#exports', componentsExports.join('\n  ')))
}

const copyPackageFile = async (srcPath: string) => {
  const packageStr = await fs.readFile(`${srcPath}/package.json`, { encoding: 'utf-8' })
  const _package = JSON.parse(packageStr)
  const newPackage = {
    name: _package.name,
    version: _package.version,
    devDependencies: _package.devDependencies,
    keywords: _package.keywords,
    author: _package.author,
    homepage: _package.homepage,
    repository: _package.repository,
    license: _package.license,
    sideEffects: _package.sideEffects,
    module: './index.es.js',
    main: './index.cjs.js',
    types: './index.d.ts',
    exports: {
      './package.json': './package.json',
      '.': {
        import: './index.es.js',
        require: './index.cjs.js',
      },
    },
  }
  await fs.writeFile(`${srcPath}/package/package.json`, JSON.stringify(newPackage, null, 2))
}

/**
 * @description Generalizes all variables
 */
const normalizeComponentDeclarationFiles = async (packagePath: string, type: 'stroke' | 'fill') => {
  const files = await fs.readdir(`${packagePath}/${type}`)
  const declarationFilename = files[1]

  const componentDeclarations = await fs.readFile(`${packagePath}/${type}/${declarationFilename}`, 'utf-8')

  const [iconId] = declarationFilename.split('.')
  const iconIdRegex = new RegExp(iconId, 'g')
  const normalizedDeclarations = componentDeclarations
    .replace(iconIdRegex, `Sv${capitalize(type)}Icon`)
    .replace(/__propDef/g, `__propDef${type}`)
    .replace(/(export {};)/g, '')
    .replace(/export default /, 'declare ')
  return normalizedDeclarations.trim()
}

const createIndexDeclarationsSvelte = async (packagePath: string, strokeDeclaration: string, fillDeclaration: string) => {
  const indexExports = await fs.readFile(`${packagePath}/index.d.ts`, 'utf-8')
  const newExports = indexExports
    .split('\n')
    .filter((line) => line.length)
    .map((line) => {
      const _type = line.match(/Stroke|Fill/)
      const [exportedIconId] = line.match(/(Sv)[a-zA-Z0-9]+/) || []
      return `Sv${_type}Icon as ${exportedIconId}`
    })
  const indexFileContent = `
    ${strokeDeclaration}${fillDeclaration.replace('import { SvelteComponentTyped } from "svelte";', '')}\nexport {\n  ${newExports.join(',\n  ')}\n}
  `
  await fs.writeFile(`${packagePath}/index.d.ts`, indexFileContent.trim())
}

const removeIconDeclarationFiles = async (packagePath: string) => {
  const strokeFiles = await fs.readdir(`${packagePath}/stroke`)
  const fillFiles = await fs.readdir(`${packagePath}/fill`)
  const declarationFiles = [...strokeFiles, ...fillFiles].filter((fileName) => fileName.endsWith('.d.ts'))

  await Promise.all(declarationFiles.map((fileName) => {
    const _type = fileName.match(/stroke|fill/i)!
    return fs.rm(`${packagePath}/${_type[0].toLowerCase()}/${fileName}`)
  }))
}

(async () => {
  const env = process.argv[2]

  if (env === '--vue') {
    await copyPackageFile(VUE_PACKAGE_PATH)
    await fs.cp(`${VUE_PACKAGE_PATH}/LICENSE`, `${VUE_PACKAGE_PATH}/package/LICENSE`)
    await fs.cp(`${VUE_PACKAGE_PATH}/README.md`, `${VUE_PACKAGE_PATH}/package/README.md`)
    await createIndexDeclarationsVue(VUE_PACKAGE_PATH)
  }

  if (env === '--svelte') {
    const strokeDeclarations = await normalizeComponentDeclarationFiles(SVELTE_PACKAGE_PATH, 'stroke')
    const fillDeclarations = await normalizeComponentDeclarationFiles(SVELTE_PACKAGE_PATH, 'fill')
    await createIndexDeclarationsSvelte(SVELTE_PACKAGE_PATH, strokeDeclarations, fillDeclarations)
    await removeIconDeclarationFiles(SVELTE_PACKAGE_PATH)
  }
})()
