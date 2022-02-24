"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const cheerio_1 = __importDefault(require("cheerio"));
const fetchSveegy = async (iconType) => {
    const res = await (0, node_fetch_1.default)(`https://sveegy.vercel.app/icons?icon-type=${iconType}`);
    const html = await res.text();
    return html;
};
const scrapeIcons = async (iconType) => {
    const sveegyHtml = await fetchSveegy(iconType);
    const $ = cheerio_1.default.load(sveegyHtml);
    const iconNames = $('div.w-full.h-14.flex.items-center.justify-center.px-2');
    const icons = iconNames.map((i, el) => {
        const iconId = $(el).text();
        const pathEl = $(el).prev().children('path');
        const dAttrs = [];
        if (pathEl.length > 1) {
            pathEl.each((j, _pathEl) => {
                dAttrs.push($(_pathEl).attr()?.d);
            });
        }
        else {
            dAttrs.push($(el).prev().children('path').attr()?.d);
        }
        return {
            iconId,
            dAttrs,
            type: iconType,
        };
    });
    return icons;
};
exports.default = scrapeIcons;
