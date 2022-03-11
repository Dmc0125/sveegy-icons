import path from 'path'

import getIcons, { disconnectFirestore } from './utils/fetch'
import {
  createEntryFile,
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

const buildIcons = async (strokeIcons: Icon[], fillIcons: Icon[], { framework, srcPath, pathTemplates }: Options) => {
  const strokeComponentTemplate = await loadComponentTemplate(framework)
  // remove stroke-width prop to transform stroke template to fill template
  const removeFromStrokeTemplate = framework === 'vue' ? '  strokeWidth?: string\n' : 'export let strokeWidth = \'1px\'\n'
  const fillComponentTemplate = strokeComponentTemplate.replace(removeFromStrokeTemplate, '')

  const strokeIconsExports = await createIconsComponents({
    type: 'stroke',
    icons: strokeIcons,
    componentTemplate: strokeComponentTemplate,
    framework,
    srcPath,
    pathTemplates,
  })
  const fillIconsExports = await createIconsComponents({
    type: 'fill',
    icons: fillIcons,
    componentTemplate: fillComponentTemplate,
    framework,
    srcPath,
    pathTemplates,
  })

  await createEntryFile({ _exports: [fillIconsExports, strokeIconsExports], srcPath })
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
    await buildIcons(strokeIcons, fillIcons, { framework: 'vue', srcPath: vueSrcPath, pathTemplates })
    await buildIcons(strokeIcons, fillIcons, { framework: 'svelte', srcPath: svelteSrcPath, pathTemplates })
    await disconnectFirestore()
    return
  }

  if (env === '--svelte') {
    await buildIcons(strokeIcons, fillIcons, { framework: 'svelte', srcPath: svelteSrcPath, pathTemplates })
    await disconnectFirestore()
    return
  }

  if (env === '--vue') {
    await buildIcons(strokeIcons, fillIcons, { framework: 'vue', srcPath: vueSrcPath, pathTemplates })
    await disconnectFirestore()
    return
  }

  await disconnectFirestore()
  throw new Error(`Unknown build environment: ${env}`)
})()
