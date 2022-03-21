import path from 'path'
import fs from 'fs/promises'

import getIcons, { disconnectFirestore } from './utils/fetch'
import {
  createIconsComponents,
  loadComponentTemplate,
  loadSvgTemplates,
  SvgTemplates,
  IconType,
  Icon,
  Framework,
} from './utils/create-components'

type Icons = {
  [_type in IconType]: Icon[]
}

type Options = {
  framework: Framework
  srcPath: string
  pathTemplates: SvgTemplates
}

const svelteSrcPath = path.join(__dirname, '../../packages/svelte/src/lib')
const vueSrcPath = path.join(__dirname, '../../packages/vue/src/lib')

/**
 * @description Deletes folders and files from src/lib directory
 */
const deletePreviousBuildData = async (srcPath: string) => {
  try {
    await fs.rm(srcPath, { recursive: true })
  } catch (error) {
    console.log('Directory /src/lib does not exist')
  }
}

/**
 * @description Creates initial folders in src/lib directory - lib/fill, lib/stroke
 */
const createBuildFolders = async (srcPath: string) => {
  await fs.mkdir(srcPath)
  await fs.mkdir(`${srcPath}/stroke`)
  await fs.mkdir(`${srcPath}/fill`)
}

/**
 * @description Build svelte entry point file
 */
const buildIndexFiles = async ([strokeIconsExports, fillIconsExports]: [string[], string[]], srcPath: string) => {
  const mergedExports = [
    ...strokeIconsExports,
    ...fillIconsExports,
  ]
  await fs.writeFile(`${srcPath}/index.ts`, mergedExports.join('\n'))
}

/**
 * @description Fetches all icons and builds them into components
 */
const buildIcons = async (strokeIcons: Icon[], fillIcons: Icon[], { framework, srcPath, pathTemplates }: Options) => {
  const strokeComponentTemplate = await loadComponentTemplate(framework)
  // remove stroke-width prop to transform stroke template to fill template
  const removeFromStrokeTemplate = framework === 'vue' ? '  strokeWidth?: string\n' : 'export let strokeWidth = \'1px\'\n'
  const fillComponentTemplate = strokeComponentTemplate.replace(removeFromStrokeTemplate, '')

  const strokeExports = await createIconsComponents({
    type: 'stroke',
    icons: strokeIcons,
    componentTemplate: strokeComponentTemplate,
    framework,
    srcPath,
    pathTemplates,
  })
  const fillExports = await createIconsComponents({
    type: 'fill',
    icons: fillIcons,
    componentTemplate: fillComponentTemplate,
    framework,
    srcPath,
    pathTemplates,
  })

  await buildIndexFiles([strokeExports, fillExports], srcPath)
}

const buildSvelte = async (strokeIcons: Icon[], fillIcons: Icon[], pathTemplates: SvgTemplates) => {
  await deletePreviousBuildData(svelteSrcPath)
  await createBuildFolders(svelteSrcPath)
  await buildIcons(strokeIcons, fillIcons, { framework: 'svelte', srcPath: svelteSrcPath, pathTemplates })
}

const buildVue = async (strokeIcons: Icon[], fillIcons: Icon[], pathTemplates: SvgTemplates) => {
  await deletePreviousBuildData(vueSrcPath)
  await createBuildFolders(vueSrcPath)
  await buildIcons(strokeIcons, fillIcons, { framework: 'vue', srcPath: vueSrcPath, pathTemplates })
}

(async () => {
  const env = process.argv[2]
  const pathTemplates = await loadSvgTemplates()

  const icons = await getIcons()
  const { stroke: strokeIcons, fill: fillIcons } = icons.reduce<Icons>((acc, { id, stroke, fill }) => {
    if (fill) {
      acc.fill.push({ iconId: id, dAttrs: fill })
    }
    if (stroke) {
      acc.stroke.push({ iconId: id, dAttrs: stroke })
    }
    return acc
  }, { stroke: [], fill: [] })

  if (env === '--all') {
    await buildVue(strokeIcons, fillIcons, pathTemplates)
    await buildSvelte(strokeIcons, fillIcons, pathTemplates)
    await disconnectFirestore()
    return
  }

  if (env === '--svelte') {
    await buildSvelte(strokeIcons, fillIcons, pathTemplates)
    await disconnectFirestore()
    return
  }

  if (env === '--vue') {
    await buildVue(strokeIcons, fillIcons, pathTemplates)
    await disconnectFirestore()
    return
  }

  await disconnectFirestore()
  throw new Error(`Unknown build environment: ${env}`)
})()
