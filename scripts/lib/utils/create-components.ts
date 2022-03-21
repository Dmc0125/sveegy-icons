import path from 'path'
import fs from 'fs/promises'

const EXPORT_ICON_TEMPLATE = 'export { default as {#name} } from \'./{#type}/{#name}.{#framework}\''
const TEMPLATES_PATH = path.join(__dirname, '../../templates')

export type IconType = 'fill' | 'stroke'

export type Icon = {
  iconId: string
  dAttrs: string[]
}

export const capitalize = (str: string) => {
  const idParts = str.split(' ')
  if (idParts.length === 1) {
    return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`
  }

  return idParts.map((idPart) => `${idPart[0].toUpperCase()}${idPart.slice(1).toLowerCase()}`).join('')
}

export type Framework = 'svelte' | 'vue'

export type SvgTemplates = {
  [_type in IconType]: string
}

const prettifyVueTemplate = (pathString: string) => {
  const lines = pathString.split('\n')
  return [
    lines[0],
    ...lines.slice(1).map((line) => `  ${line}`),
  ].join('\n')
}

/**
 * @description Create path html elements
 */
const createPaths = (dAttrs: string[], type: IconType, pathTemplates: SvgTemplates, framework: Framework) => {
  const pathTemplate = pathTemplates[type]
  const pathsData = dAttrs.map((dAttr) => pathTemplate.replace('{#d}', dAttr))
  const pathsString = pathsData.join('\n  ')
  let prettifiedPathsString = framework === 'vue' ? prettifyVueTemplate(pathsString) : pathsString

  // Change strokeWidth param for vue
  if (type === 'stroke' && framework === 'vue') {
    const strWidthRegex = /stroke-width="{strokeWidth}"/g
    prettifiedPathsString = prettifiedPathsString.replace(strWidthRegex, ':stroke-width="props.strokeWidth"')
  }

  return prettifiedPathsString
}

export const loadSvgTemplates = async () => {
  const svgTemplatesStr = await fs.readFile(`${TEMPLATES_PATH}/paths.json`, { encoding: 'utf-8' })
  const svgTemplates = JSON.parse(svgTemplatesStr) as SvgTemplates
  return svgTemplates
}

export const loadComponentTemplate = async (framework: Framework) => {
  const componentTemplate = await fs.readFile(`${TEMPLATES_PATH}/svg.${framework}`, { encoding: 'utf-8' })
  return componentTemplate
}

type WriteComponentFileAndCreateExportParams = {
  component: string
  componentName: string
  iconType: IconType
  framework: Framework
  srcPath: string
}

/**
 * @description Write icon component
 * @returns Icon component export
 */
const writeComponentFileAndCreateExport = async ({
  component, componentName, iconType, framework, srcPath,
}: WriteComponentFileAndCreateExportParams) => {
  await fs.writeFile(`${srcPath}/${iconType}/${componentName}.${framework}`, component)

  // eslint-disable-next-line prefer-regex-literals
  const nameRegex = new RegExp('{#name}', 'g')
  return EXPORT_ICON_TEMPLATE
    .replace(nameRegex, componentName)
    .replace('{#type}', iconType)
    .replace('{#framework}', framework)
}

type CreateIconsComponentsParams = {
  icons: Icon[]
  componentTemplate: string
  framework: Framework
  srcPath: string
  pathTemplates: SvgTemplates
  type: IconType
}

/**
 * @description Create and write icon components
 * @returns Exports of all icon components
 */
export const createIconsComponents = async ({
  icons, componentTemplate, framework, srcPath, pathTemplates, type,
}: CreateIconsComponentsParams) => {
  const _exports: string[] = []

  for (let i = 0; i < icons.length; i += 1) {
    const { dAttrs, iconId } = icons[i]

    const paths = createPaths(dAttrs, type, pathTemplates, framework)
    const iconComponent = componentTemplate.replace('#path', paths)
    const componentName = `Sv${capitalize(iconId.replace(/-/g, ' '))}${capitalize(type)}`
    // eslint-disable-next-line no-await-in-loop
    const _export = await writeComponentFileAndCreateExport({
      component: iconComponent,
      componentName,
      iconType: type,
      framework,
      srcPath,
    })
    _exports.push(_export)
  }

  return _exports
}
