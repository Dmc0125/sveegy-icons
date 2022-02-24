import fetch from 'node-fetch'
import cheerio from 'cheerio'

export type IconType = 'fill' | 'stroke'

const fetchSveegy = async (iconType: IconType) => {
  const res = await fetch(`https://sveegy.vercel.app/icons?icon-type=${iconType}`)
  const html = await res.text()
  return html
}

export type Icon = {
  iconId: string
  dAttrs: string[]
  type: IconType
}

const scrapeIcons = async (iconType: IconType) => {
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
  }) as unknown as Icon[]
  return icons
}

export default scrapeIcons
