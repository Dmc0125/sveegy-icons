const cheerio = require('cheerio')
const fetch = require('node-fetch')
const fs = require('fs/promises')
const path = require('path')

const templates = require('./templates.cjs')

const SRC_PATH = path.join(__dirname, '../src/lib')
const EXPORT_ICON_TEMPLATE = 'export { default as {#name} } from \'./{#type}/{#name}.svelte\''

/**
 * @param {'outline' | 'stroke' | 'fill'} iconType
 * @returns {Promise<string>}
 */
const fetchSveegy = async (iconType) => {
  const res = await fetch(`https://sveegy.vercel.app/icons?icon-type=${iconType}`)
  const html = await res.text()
  return html
}

/**
 * @param {'outline' | 'stroke' | 'fill'} iconType
 * @returns {Promise<{ iconId: string; dAttrs: string, type: 'outline' | 'stroke' | 'fill' }[]>}
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
 * @param {{ iconId: string; dAttrs: string; type: 'outline' | 'stroke' | 'fill' }} icon
 * @param {string} _path
 * @returns {Promise<[string, string]>}
 */
const createIconComponent = async (icon, _path) => {
  const { iconId, dAttrs, type } = icon
  const componentName = `Sv${capitalize(iconId)}${capitalize(type)}`

  const templateId = type === 'stroke' ? 'stroke' : 'fill_outline'
  const svgTemplate = templates[templateId]
  const pathTemplate = templates[`${templateId}Path`]

  const pathsData = dAttrs.reduce((acc, dAttr) => (`
    ${acc}\n\t${pathTemplate.replace('{#d}', dAttr)}
  `), '')

  const svgData = svgTemplate.replace('{#path}', pathsData.trim())
  await fs.writeFile(`${_path}/${type}/${componentName}.svelte`, svgData)

  return [componentName, type]
}

/**
 * @param {Promise<{ iconId: string; dAttrs: string: type: 'outline' | 'stroke' | 'fill' }[]>} icons
 */
const createIconsComponents = async (icons) => {
  const _exports = []

  for (let i = 0; i < icons.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const [componentName, type] = await createIconComponent(icons[i], SRC_PATH)
    // eslint-disable-next-line prefer-regex-literals
    const nameRegex = new RegExp('{#name}', 'g')
    _exports.push(EXPORT_ICON_TEMPLATE.replace(nameRegex, componentName).replace('{#type}', type))
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
  const outlineIcons = await scrapeIcons('outline')
  const outlineExports = await createIconsComponents(outlineIcons)

  const fillIcons = await scrapeIcons('fill')
  const fillExports = await createIconsComponents(fillIcons)

  const strokeIcons = await scrapeIcons('stroke')
  const strokeExports = await createIconsComponents(strokeIcons)

  await createEntryFile(outlineExports, fillExports, strokeExports)
})()
