import path from 'path'

import scrapeIcons, { Icon, IconType } from './utils/fetch'
import {
  createEntryFile, createIconsComponents, loadComponentTemplate, loadSvgTemplates, SvgTemplates,
} from './utils/create-components'

type Icons = {
  [_type in IconType]: Icon[]
}

const createSvelteIcons = async (icons: Icons, pathTemplates: SvgTemplates) => {
  const FRAMEWORK = 'svelte'
  const SRC_PATH = path.join(__dirname, '../../packages/svelte/src/lib')

  const strokeComponentTemplate = await loadComponentTemplate('svelte')
  const fillComponentTemplate = strokeComponentTemplate.replace('export let strokeWidth = \'1px\'\n', '')

  const strokeExports = await createIconsComponents({
    icons: icons.stroke,
    componentTemplate: strokeComponentTemplate,
    framework: FRAMEWORK,
    srcPath: SRC_PATH,
    pathTemplates,
  })
  const fillExports = await createIconsComponents({
    icons: icons.fill,
    componentTemplate: fillComponentTemplate,
    framework: FRAMEWORK,
    srcPath: SRC_PATH,
    pathTemplates,
  })

  await createEntryFile({
    _exports: [strokeExports, fillExports],
    srcPath: SRC_PATH,
  })
}

const createVueIcons = async (icons: Icons, pathTemplates: SvgTemplates) => {
  const FRAMEWORK = 'vue'
  const SRC_PATH = path.join(__dirname, '../../packages/vue/src/lib')

  const strokeComponentTemplate = await loadComponentTemplate('vue')
  const fillComponentTemplate = strokeComponentTemplate.replace('  strokeWidth?: string\n', '')

  const strokeIcons = await createIconsComponents({
    icons: icons.stroke,
    componentTemplate: strokeComponentTemplate,
    framework: FRAMEWORK,
    srcPath: SRC_PATH,
    pathTemplates,
  })
  const fillIcons = await createIconsComponents({
    icons: icons.fill,
    componentTemplate: fillComponentTemplate,
    framework: FRAMEWORK,
    srcPath: SRC_PATH,
    pathTemplates,
  })

  await createEntryFile({
    _exports: [fillIcons, strokeIcons],
    srcPath: SRC_PATH,
  })
}

const getIcons = async () => {
  const fillIcons = await scrapeIcons('fill')
  const strokeIcons = await scrapeIcons('stroke')

  return [fillIcons, strokeIcons]
}

const buildSvelte = async (pathTemplates: SvgTemplates) => {
  const [fillIcons, strokeIcons] = await getIcons()

  await createSvelteIcons({
    fill: fillIcons,
    stroke: strokeIcons,
  }, pathTemplates)
}

const buildVue = async (pathTemplates: SvgTemplates) => {
  const [fillIcons, strokeIcons] = await getIcons()

  await createVueIcons({
    fill: fillIcons,
    stroke: strokeIcons,
  }, pathTemplates)
}

(async () => {
  const env = process.argv[2]
  const pathTemplates = await loadSvgTemplates()

  if (env === '--all') {
    await buildSvelte(pathTemplates)
    await buildVue(pathTemplates)
    return
  }

  if (env === '--svelte') {
    await buildSvelte(pathTemplates)
    return
  }

  if (env === '--vue') {
    await buildVue(pathTemplates)
    return
  }

  throw new Error(`Unknown build environment: ${env}`)
})()
