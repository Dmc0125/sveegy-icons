"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEntryFile = exports.createIconsComponents = exports.loadComponentTemplate = exports.loadSvgTemplates = void 0;
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
const EXPORT_ICON_TEMPLATE = 'export { default as {#name} } from \'./{#type}/{#name}.{#framework}\'';
const TEMPLATES_PATH = path_1.default.join(__dirname, '../../templates');
const capitalize = (str) => {
    const idParts = str.split(' ');
    if (idParts.length === 1) {
        return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
    }
    return idParts.map((idPart) => `${idPart[0].toUpperCase()}${idPart.slice(1).toLowerCase()}`).join('');
};
const prettifyVueTemplate = (pathString) => {
    const lines = pathString.split('\n');
    return [
        lines[0],
        ...lines.slice(1).map((line) => `  ${line}`),
    ].join('\n');
};
/**
 * @description Create path html elements
 */
const createPaths = (dAttrs, type, pathTemplates, framework) => {
    const pathTemplate = pathTemplates[type];
    const pathsData = dAttrs.map((dAttr) => pathTemplate.replace('{#d}', dAttr));
    const pathsString = pathsData.join('\n  ');
    let prettifiedPathsString = framework === 'vue' ? prettifyVueTemplate(pathsString) : pathsString;
    // Change strokeWidth param for vue
    if (type === 'stroke' && framework === 'vue') {
        const strWidthRegex = /stroke-width="{strokeWidth}"/g;
        prettifiedPathsString = prettifiedPathsString.replace(strWidthRegex, ':stroke-width="props.strokeWidth"');
    }
    return prettifiedPathsString;
};
const loadSvgTemplates = async () => {
    const svgTemplatesStr = await promises_1.default.readFile(`${TEMPLATES_PATH}/paths.json`, { encoding: 'utf-8' });
    const svgTemplates = JSON.parse(svgTemplatesStr);
    return svgTemplates;
};
exports.loadSvgTemplates = loadSvgTemplates;
const loadComponentTemplate = async (framework) => {
    const componentTemplate = await promises_1.default.readFile(`${TEMPLATES_PATH}/svg.${framework}`, { encoding: 'utf-8' });
    return componentTemplate;
};
exports.loadComponentTemplate = loadComponentTemplate;
/**
 * @description Write icon component
 * @returns Icon component export
 */
const writeComponentFileAndCreateExport = async ({ component, componentName, iconType, framework, srcPath, }) => {
    await promises_1.default.writeFile(`${srcPath}/${iconType}/${componentName}.${framework}`, component);
    // eslint-disable-next-line prefer-regex-literals
    const nameRegex = new RegExp('{#name}', 'g');
    return EXPORT_ICON_TEMPLATE
        .replace(nameRegex, componentName)
        .replace('{#type}', iconType)
        .replace('{#framework}', framework);
};
/**
 * @description Create and write icon components
 * @returns Exports of all icon components
 */
const createIconsComponents = async ({ icons, componentTemplate, framework, srcPath, pathTemplates, type, }) => {
    const _exports = [];
    for (let i = 0; i < icons.length; i += 1) {
        const { dAttrs, iconId } = icons[i];
        const paths = createPaths(dAttrs, type, pathTemplates, framework);
        const iconComponent = componentTemplate.replace('#path', paths);
        const componentName = `Sv${capitalize(iconId.replace(/-/g, ' '))}${capitalize(type)}`;
        // eslint-disable-next-line no-await-in-loop
        const _export = await writeComponentFileAndCreateExport({
            component: iconComponent,
            componentName,
            iconType: type,
            framework,
            srcPath,
        });
        _exports.push(_export);
    }
    return _exports;
};
exports.createIconsComponents = createIconsComponents;
/**
 * @description Create index.ts file with exports of all the components
 */
const createEntryFile = async ({ _exports, srcPath }) => {
    let allExports = '';
    for (let i = 0; i < _exports.length; i += 1) {
        const exportsJoined = _exports[i].join('\n');
        allExports += `${exportsJoined}\n\n`;
    }
    await promises_1.default.writeFile(`${srcPath}/index.ts`, `${allExports.trim()}\n`);
};
exports.createEntryFile = createEntryFile;
