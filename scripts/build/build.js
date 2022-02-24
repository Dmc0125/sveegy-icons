"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fetch_1 = __importDefault(require("./utils/fetch"));
const create_components_1 = require("./utils/create-components");
const createSvelteIcons = async (icons, pathTemplates) => {
    const FRAMEWORK = 'svelte';
    const SRC_PATH = path_1.default.join(__dirname, '../../packages/svelte/src/lib');
    const strokeComponentTemplate = await (0, create_components_1.loadComponentTemplate)('svelte');
    const fillComponentTemplate = strokeComponentTemplate.replace('export let strokeWidth = \'1px\'\n', '');
    const strokeExports = await (0, create_components_1.createIconsComponents)({
        icons: icons.stroke,
        componentTemplate: strokeComponentTemplate,
        framework: FRAMEWORK,
        srcPath: SRC_PATH,
        pathTemplates,
    });
    const fillExports = await (0, create_components_1.createIconsComponents)({
        icons: icons.fill,
        componentTemplate: fillComponentTemplate,
        framework: FRAMEWORK,
        srcPath: SRC_PATH,
        pathTemplates,
    });
    await (0, create_components_1.createEntryFile)({
        _exports: [strokeExports, fillExports],
        srcPath: SRC_PATH,
    });
};
const createVueIcons = async (icons, pathTemplates) => {
    const FRAMEWORK = 'vue';
    const SRC_PATH = path_1.default.join(__dirname, '../../packages/vue/src/lib');
    const strokeComponentTemplate = await (0, create_components_1.loadComponentTemplate)('vue');
    const fillComponentTemplate = strokeComponentTemplate.replace('  strokeWidth?: string\n', '');
    const strokeIcons = await (0, create_components_1.createIconsComponents)({
        icons: icons.stroke,
        componentTemplate: strokeComponentTemplate,
        framework: FRAMEWORK,
        srcPath: SRC_PATH,
        pathTemplates,
    });
    const fillIcons = await (0, create_components_1.createIconsComponents)({
        icons: icons.fill,
        componentTemplate: fillComponentTemplate,
        framework: FRAMEWORK,
        srcPath: SRC_PATH,
        pathTemplates,
    });
    await (0, create_components_1.createEntryFile)({
        _exports: [fillIcons, strokeIcons],
        srcPath: SRC_PATH,
    });
};
const getIcons = async () => {
    const fillIcons = await (0, fetch_1.default)('fill');
    const strokeIcons = await (0, fetch_1.default)('stroke');
    return [fillIcons, strokeIcons];
};
const buildSvelte = async (pathTemplates) => {
    const [fillIcons, strokeIcons] = await getIcons();
    await createSvelteIcons({
        fill: fillIcons,
        stroke: strokeIcons,
    }, pathTemplates);
};
const buildVue = async (pathTemplates) => {
    const [fillIcons, strokeIcons] = await getIcons();
    await createVueIcons({
        fill: fillIcons,
        stroke: strokeIcons,
    }, pathTemplates);
};
(async () => {
    const env = process.argv[2];
    const pathTemplates = await (0, create_components_1.loadSvgTemplates)();
    if (env === '--all') {
        await buildSvelte(pathTemplates);
        await buildVue(pathTemplates);
        return;
    }
    if (env === '--svelte') {
        await buildSvelte(pathTemplates);
        return;
    }
    if (env === '--vue') {
        await buildVue(pathTemplates);
        return;
    }
    throw new Error(`Unknown build environment: ${env}`);
})();
