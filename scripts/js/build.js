"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fetch_1 = __importStar(require("./utils/fetch"));
const create_components_1 = require("./utils/create-components");
const svelteSrcPath = path_1.default.join(__dirname, '../../packages/svelte/src/lib');
const vueSrcPath = path_1.default.join(__dirname, '../../packages/vue/src/lib');
const buildIcons = async (strokeIcons, fillIcons, { framework, srcPath, pathTemplates }) => {
    const strokeComponentTemplate = await (0, create_components_1.loadComponentTemplate)(framework);
    // remove stroke-width prop to transform stroke template to fill template
    const removeFromStrokeTemplate = framework === 'vue' ? '  strokeWidth?: string\n' : 'export let strokeWidth = \'1px\'\n';
    const fillComponentTemplate = strokeComponentTemplate.replace(removeFromStrokeTemplate, '');
    const strokeIconsExports = await (0, create_components_1.createIconsComponents)({
        type: 'stroke',
        icons: strokeIcons,
        componentTemplate: strokeComponentTemplate,
        framework,
        srcPath,
        pathTemplates,
    });
    const fillIconsExports = await (0, create_components_1.createIconsComponents)({
        type: 'fill',
        icons: fillIcons,
        componentTemplate: fillComponentTemplate,
        framework,
        srcPath,
        pathTemplates,
    });
    await (0, create_components_1.createEntryFile)({ _exports: [fillIconsExports, strokeIconsExports], srcPath });
};
(async () => {
    const env = process.argv[2];
    const pathTemplates = await (0, create_components_1.loadSvgTemplates)();
    const icons = await (0, fetch_1.default)();
    const { stroke: strokeIcons, fill: fillIcons } = icons.reduce((acc, { id, stroke, fill }) => {
        if (fill) {
            acc.fill.push({ iconId: id, dAttrs: fill });
        }
        if (stroke) {
            acc.stroke.push({ iconId: id, dAttrs: stroke });
        }
        return acc;
    }, { stroke: [], fill: [] });
    if (env === '--all') {
        await buildIcons(strokeIcons, fillIcons, { framework: 'vue', srcPath: vueSrcPath, pathTemplates });
        await buildIcons(strokeIcons, fillIcons, { framework: 'svelte', srcPath: svelteSrcPath, pathTemplates });
        await (0, fetch_1.disconnectFirestore)();
        return;
    }
    if (env === '--svelte') {
        await buildIcons(strokeIcons, fillIcons, { framework: 'svelte', srcPath: svelteSrcPath, pathTemplates });
        await (0, fetch_1.disconnectFirestore)();
        return;
    }
    if (env === '--vue') {
        await buildIcons(strokeIcons, fillIcons, { framework: 'vue', srcPath: vueSrcPath, pathTemplates });
        await (0, fetch_1.disconnectFirestore)();
        return;
    }
    await (0, fetch_1.disconnectFirestore)();
    throw new Error(`Unknown build environment: ${env}`);
})();
