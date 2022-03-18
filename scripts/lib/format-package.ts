import path from 'path'
import fs from 'fs/promises'

const packagePath = path.join(__dirname, '../../packages/svelte/package/package.json')

type ExportsOption = {
  [exportedPath: string]: string
}

type PackageOptions = Record<string, any> & { exports: ExportsOption }

const loadPackageJson = async () => {
  const packageString = await fs.readFile(packagePath, 'utf-8')
  const packageOptions = JSON.parse(packageString)
  return packageOptions as PackageOptions
}

/**
 * @description rewrite paths from './(stroke|fill)/(icon)(fill|stroke)' to './(icon)(fill|stroke)
 */
const rewritePaths = (options: ExportsOption): ExportsOption => (
  Object.fromEntries(
    Object.entries(options).map((keyValue) => {
      const [exportPath, filePath] = keyValue
      if (!exportPath.match(/fill|stroke/g)) {
        return [exportPath, filePath]
      }

      return [
        exportPath.replace(/\.\/(fill|stroke)\//, './'),
        filePath,
      ]
    }),
  )
);

(async () => {
  const oldPackage = await loadPackageJson()
  const packageExports = rewritePaths(oldPackage.exports)
  await fs.writeFile(packagePath, JSON.stringify({ ...oldPackage, exports: packageExports }, null, 2))
})()
