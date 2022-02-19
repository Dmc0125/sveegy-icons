const cheerio = require('cheerio')
const fetch = require('node-fetch')
const fs = require('fs/promises')
const path = require('path')

const pathTemplates = require('./templates/paths.json')

const SRC_PATH = path.join(__dirname, '../src/lib')
const EXPORT_ICON_TEMPLATE = 'export { default as {#name} } from \'./{#type}/{#name}.svelte\''

const loadComponentTemplate = async () => {
  const componentTemplatePath = path.join(__dirname, '/templates')
  const componentTemplate = await fs.readFile(`${componentTemplatePath}/svg.svelte`, { encoding: 'utf-8' })
  return componentTemplate
}

/**
 * @param {'stroke' | 'fill'} iconType
 * @returns {Promise<string>}
 */
const fetchSveegy = async (iconType) => {
  const res = await fetch(`https://sveegy.vercel.app/icons?icon-type=${iconType}`)
  const html = await res.text()
  return html
}

/**
 * @param {'stroke' | 'fill'} iconType
 * @returns {Promise<{ iconId: string; dAttrs: string, type: 'stroke' | 'fill' }[]>}
 */
const scrapeIcons = async (iconType) => {
  const sveegyHtml = await fetchSveegy(iconType)
  const $ = cheerio.load(sveegyHtml)

  const iconNames = $('div.w-full.h-14.flex.items-center.justify-center.px-2')
  const icons = iconNames.map((i, el) => {
    const iconId = $(el).text()
    const pathEl = $(el).prev().children('path')

    const dAttrs = []

    if (pathEl.length > 1) {
      pathEl.each((j, _pathEl) => {
        dAttrs.push($(_pathEl).attr()?.d)
      })
    } else {
      dAttrs.push($(el).prev().children('path').attr()?.d)
    }

    return {
      iconId,
      dAttrs,
      type: iconType,
    }
  })
  return icons
}

/**
 * @param {string} str
 * @returns {string}
 */
const capitalize = (str) => {
  const idParts = str.split(' ')
  if (idParts.length === 1) {
    return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`
  }

  return idParts.map((idPart) => `${idPart[0].toUpperCase()}${idPart.slice(1).toLowerCase()}`).join('')
}

/**
 * @param {string[]} dAttrs
 * @param {'stroke' | 'fill'} type
 * @returns {string}
 */
const createPaths = (dAttrs, type) => {
  const pathTemplate = pathTemplates[type]
  const pathsData = dAttrs.map((dAttr) => pathTemplate.replace('{#d}', dAttr))

  return pathsData.join('\n  ')
}

/**
 * @param {string} component
 * @param {string} componentName
 * @param {'stroke' | 'fill'} iconType
 */
const writeComponentFileAndCreateExport = async (component, componentName, iconType) => {
  await fs.writeFile(`${SRC_PATH}/${iconType}/${componentName}.svelte`, component)

  // eslint-disable-next-line prefer-regex-literals
  const nameRegex = new RegExp('{#name}', 'g')
  return EXPORT_ICON_TEMPLATE.replace(nameRegex, componentName).replace('{#type}', iconType)
}

/**
 * @param {{ iconId: string; dAttrs: string: type: 'stroke' | 'fill' }[]} icons
 * @param {string} componentTemplate
 */
const createIconsComponents = async (icons, componentTemplate) => {
  const _exports = []

  for (let i = 0; i < icons.length; i += 1) {
    const { dAttrs, type, iconId } = icons[i]

    const paths = createPaths(dAttrs, type)
    const iconComponent = componentTemplate.replace('#path', paths)
    const componentName = `Sv${capitalize(iconId)}${capitalize(type)}`
    // eslint-disable-next-line no-await-in-loop
    const _export = await writeComponentFileAndCreateExport(iconComponent, componentName, type)
    _exports.push(_export)
  }

  return _exports
}

/**
 * @param  {...string[]} _exports
 */
const createEntryFile = async (..._exports) => {
  let allExports = ''

  for (let i = 0; i < _exports.length; i += 1) {
    const exportsJoined = _exports[i].join('\n')
    allExports += `${exportsJoined}\n\n`
  }

  await fs.writeFile(`${SRC_PATH}/index.ts`, `${allExports.trim()}\n`)
}

(async () => {
  const strokeComponentTemplate = await loadComponentTemplate()
  const fillComponentTemplate = strokeComponentTemplate.replace('export let strokeWidth = \'1px\'\n', '')

  const fillIcons = await scrapeIcons('fill')
  const fillExports = await createIconsComponents(fillIcons, fillComponentTemplate)

  const strokeIcons = await scrapeIcons('stroke')
  const strokeExports = await createIconsComponents(strokeIcons, strokeComponentTemplate)

  await createEntryFile(fillExports, strokeExports)
})()
