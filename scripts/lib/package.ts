import fs from 'fs/promises'
import path from 'path'

const VUE_PACKAGE_PATH = path.join(__dirname, '../../packages/vue')

const createExports = async () => {
  const fillComponents = await fs.readdir(`${VUE_PACKAGE_PATH}/src/lib/fill`)
  const strokeComponents = await fs.readdir(`${VUE_PACKAGE_PATH}/src/lib/stroke`)

  const exports: Record<string, string> = {
    './package.json': './package.json',
  }

  fillComponents.forEach((componentName) => {
    exports[`./${componentName}`] = `./fill/${componentName}`
  })
  strokeComponents.forEach((componentName) => {
    exports[`./${componentName}`] = `./stroke/${componentName}`
  })

  return exports
}

const copyPackageFile = async (exports: Record<string, string>) => {
  const packageStr = await fs.readFile(`${VUE_PACKAGE_PATH}/package.json`, { encoding: 'utf-8' })
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
    exports,
  }
  await fs.writeFile(`${VUE_PACKAGE_PATH}/package/package.json`, JSON.stringify(newPackage, null, 2))
}

(async () => {
  try {
    await fs.rm(`${VUE_PACKAGE_PATH}/package`, { recursive: true })
  } catch (error) {
    console.log('Can not find \'vue/package\' directory, skipping to next steps')
  }
  await fs.mkdir(`${VUE_PACKAGE_PATH}/package`)

  const exports = await createExports()
  await copyPackageFile(exports)

  await fs.mkdir(`${VUE_PACKAGE_PATH}/package/fill`)
  await fs.mkdir(`${VUE_PACKAGE_PATH}/package/stroke`)

  await fs.cp(`${VUE_PACKAGE_PATH}/src/lib/fill`, `${VUE_PACKAGE_PATH}/package/fill`, { recursive: true })
  await fs.cp(`${VUE_PACKAGE_PATH}/src/lib/stroke`, `${VUE_PACKAGE_PATH}/package/stroke`, { recursive: true })
  await fs.cp(`${VUE_PACKAGE_PATH}/LICENSE`, `${VUE_PACKAGE_PATH}/package/LICENSE`)
  await fs.cp(`${VUE_PACKAGE_PATH}/README.md`, `${VUE_PACKAGE_PATH}/package/README.md`)
})()
