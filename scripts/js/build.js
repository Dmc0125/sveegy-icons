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
const promises_1 = __importDefault(require("fs/promises"));
const fetch_1 = __importStar(require("./utils/fetch"));
const create_components_1 = require("./utils/create-components");
const svelteSrcPath = path_1.default.join(__dirname, '../../packages/svelte/src/lib');
const vueSrcPath = path_1.default.join(__dirname, '../../packages/vue/src/lib');
/**
 * @description Deletes folders and files from src/lib directory
 */
const deletePreviousBuildData = async (srcPath) => {
    try {
        await promises_1.default.rm(srcPath, { recursive: true });
    }
    catch (error) {
        console.log('Directory /src/lib does not exist');
    }
};
/**
 * @description Creates initial folders in src/lib directory - lib/fill, lib/stroke
 */
const createBuildFolders = async (srcPath) => {
    await promises_1.default.mkdir(srcPath);
    await promises_1.default.mkdir(`${srcPath}/stroke`);
    await promises_1.default.mkdir(`${srcPath}/fill`);
};
/**
 * @description Build svelte entry point file
 */
const buildIndexFiles = async ([strokeIconsExports, fillIconsExports], srcPath) => {
    const mergedExports = [
        ...strokeIconsExports,
        ...fillIconsExports,
    ];
    await promises_1.default.writeFile(`${srcPath}/index.ts`, mergedExports.join('\n'));
};
/**
 * @description Fetches all icons and builds them into components
 */
const buildIcons = async (strokeIcons, fillIcons, { framework, srcPath, pathTemplates }) => {
    const strokeComponentTemplate = await (0, create_components_1.loadComponentTemplate)(framework);
    // remove stroke-width prop to transform stroke template to fill template
    const removeFromStrokeTemplate = framework === 'vue' ? '  strokeWidth?: string\n' : 'export let strokeWidth = \'1px\'\n';
    const fillComponentTemplate = strokeComponentTemplate.replace(removeFromStrokeTemplate, '');
    const strokeExports = await (0, create_components_1.createIconsComponents)({
        type: 'stroke',
        icons: strokeIcons,
        componentTemplate: strokeComponentTemplate,
        framework,
        srcPath,
        pathTemplates,
    });
    const fillExports = await (0, create_components_1.createIconsComponents)({
        type: 'fill',
        icons: fillIcons,
        componentTemplate: fillComponentTemplate,
        framework,
        srcPath,
        pathTemplates,
    });
    await buildIndexFiles([strokeExports, fillExports], srcPath);
};
const buildSvelte = async (strokeIcons, fillIcons, pathTemplates) => {
    await deletePreviousBuildData(svelteSrcPath);
    await createBuildFolders(svelteSrcPath);
    await buildIcons(strokeIcons, fillIcons, { framework: 'svelte', srcPath: svelteSrcPath, pathTemplates });
};
const buildVue = async (strokeIcons, fillIcons, pathTemplates) => {
    await deletePreviousBuildData(vueSrcPath);
    await createBuildFolders(vueSrcPath);
    await buildIcons(strokeIcons, fillIcons, { framework: 'vue', srcPath: vueSrcPath, pathTemplates });
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
        await buildVue(strokeIcons, fillIcons, pathTemplates);
        await buildSvelte(strokeIcons, fillIcons, pathTemplates);
        await (0, fetch_1.disconnectFirestore)();
        return;
    }
    if (env === '--svelte') {
        await buildSvelte(strokeIcons, fillIcons, pathTemplates);
        await (0, fetch_1.disconnectFirestore)();
        return;
    }
    if (env === '--vue') {
        await buildVue(strokeIcons, fillIcons, pathTemplates);
        await (0, fetch_1.disconnectFirestore)();
        return;
    }
    await (0, fetch_1.disconnectFirestore)();
    throw new Error(`Unknown build environment: ${env}`);
})();
