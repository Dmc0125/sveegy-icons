import fs from 'fs/promises'
import path from 'path'

const VUE_PACKAGE_PATH = path.join(__dirname, '../../packages/vue')

const copyPackageFile = async () => {
  const packageStr = await fs.readFile(`${VUE_PACKAGE_PATH}/package.json`, { encoding: 'utf-8' })
  const _package = JSON.parse(packageStr)
  const newPackage = {
    name: _package.name,
    version: _package.version,
    types: './index.d.ts',
    main: './index.js',
    devDependencies: _package.devDependencies,
    keywords: _package.keywords,
    author: _package.author,
    homepage: _package.homepage,
    repository: _package.repository,
    license: _package.license,
    sideEffects: _package.sideEffects,
    exports: {
      './package.json': './package.json',
      '.': './index.js',
    },
  }
  await fs.writeFile(`${VUE_PACKAGE_PATH}/package/package.json`, JSON.stringify(newPackage, null, 2))
}

const copyIndexFile = async () => {
  const _exports = await fs.readFile(`${VUE_PACKAGE_PATH}/src/lib/index.ts`)
  await fs.writeFile(`${VUE_PACKAGE_PATH}/package/index.d.ts`, _exports)
  await fs.writeFile(`${VUE_PACKAGE_PATH}/package/index.js`, _exports)
}

(async () => {
  try {
    await fs.rm(`${VUE_PACKAGE_PATH}/package`, { recursive: true })
  } catch (error) {
    console.log('Can not find \'vue/package\' directory, skipping to next steps')
  }
  await fs.mkdir(`${VUE_PACKAGE_PATH}/package`)
  await copyPackageFile()
  await copyIndexFile()

  await fs.mkdir(`${VUE_PACKAGE_PATH}/package/fill`)
  await fs.mkdir(`${VUE_PACKAGE_PATH}/package/stroke`)

  await fs.cp(`${VUE_PACKAGE_PATH}/src/lib/fill`, `${VUE_PACKAGE_PATH}/package/fill`, { recursive: true })
  await fs.cp(`${VUE_PACKAGE_PATH}/src/lib/stroke`, `${VUE_PACKAGE_PATH}/package/stroke`, { recursive: true })
  await fs.cp(`${VUE_PACKAGE_PATH}/LICENSE`, `${VUE_PACKAGE_PATH}/package/LICENSE`)
})()
