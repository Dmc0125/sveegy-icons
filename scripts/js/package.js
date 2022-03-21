"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const create_components_1 = require("./utils/create-components");
const VUE_PACKAGE_PATH = path_1.default.join(__dirname, '../../packages/vue');
const SVELTE_PACKAGE_PATH = path_1.default.join(__dirname, '../../packages/svelte/package');
const createIndexDeclarationsVue = async (srcPath) => {
    const vueStrokeDeclarations = `declare const defStroke: DefineComponent<__VLS_DefinePropsToOptions<{
    size?: string | undefined;
    color?: string | undefined;
    strokeWidth?: string | undefined;
  }>,
  () => void,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  Record<string, any>,
  string,
  VNodeProps & AllowedComponentProps & ComponentCustomProps,
  Readonly<ExtractPropTypes<__VLS_DefinePropsToOptions<{
    size?: string | undefined;
    color?: string | undefined;
    strokeWidth?: string | undefined;
  }>>>,
  {}
>;`;
    const vueFillDeclarations = vueStrokeDeclarations.replace(/\s+strokeWidth\?: string \| undefined;/g, '').replace('defStroke', 'defFill');
    const vueDeclarations = `
import { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes, PropType } from 'vue'
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_DefinePropsToOptions<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? {
    type: PropType<__VLS_NonUndefinedable<T[K]>>;
  } : {
    type: PropType<T[K]>;
    required: true;
  };
};
${vueStrokeDeclarations}\n${vueFillDeclarations}\nexport {\n  #exports\n}`.trim();
    const strokeFilenames = await promises_1.default.readdir(`${srcPath}/src/lib/stroke`);
    const fillFilenames = await promises_1.default.readdir(`${srcPath}/src/lib/fill`);
    const componentsExports = [...strokeFilenames, ...fillFilenames].map((filename) => {
        const _type = filename.match(/Stroke|Fill/);
        return `def${_type} as ${filename.split('.')[0]},`;
    });
    await promises_1.default.writeFile(`${srcPath}/package/index.d.ts`, vueDeclarations.replace('#exports', componentsExports.join('\n  ')));
};
const copyPackageFile = async (srcPath) => {
    const packageStr = await promises_1.default.readFile(`${srcPath}/package.json`, { encoding: 'utf-8' });
    const _package = JSON.parse(packageStr);
    const newPackage = {
        name: _package.name,
        version: _package.version,
        devDependencies: _package.devDependencies,
        keywords: _package.keywords,
        author: _package.author,
        homepage: _package.homepage,
        repository: _package.repository,
        license: _package.license,
        sideEffects: _package.sideEffects,
        module: './index.es.js',
        main: './index.cjs.js',
        types: './index.d.ts',
        exports: {
            './package.json': './package.json',
            '.': {
                import: './index.es.js',
                require: './index.cjs.js',
            },
        },
    };
    await promises_1.default.writeFile(`${srcPath}/package/package.json`, JSON.stringify(newPackage, null, 2));
};
/**
 * @description Generalizes all variables
 */
const normalizeComponentDeclarationFiles = async (packagePath, type) => {
    const files = await promises_1.default.readdir(`${packagePath}/${type}`);
    const declarationFilename = files[1];
    const componentDeclarations = await promises_1.default.readFile(`${packagePath}/${type}/${declarationFilename}`, 'utf-8');
    const [iconId] = declarationFilename.split('.');
    const iconIdRegex = new RegExp(iconId, 'g');
    const normalizedDeclarations = componentDeclarations
        .replace(iconIdRegex, `Sv${(0, create_components_1.capitalize)(type)}Icon`)
        .replace(/__propDef/g, `__propDef${type}`)
        .replace(/(export {};)/g, '')
        .replace(/export default /, 'declare ');
    return normalizedDeclarations.trim();
};
const createIndexDeclarationsSvelte = async (packagePath, strokeDeclaration, fillDeclaration) => {
    const indexExports = await promises_1.default.readFile(`${packagePath}/index.d.ts`, 'utf-8');
    const newExports = indexExports
        .split('\n')
        .filter((line) => line.length)
        .map((line) => {
        const _type = line.match(/Stroke|Fill/);
        const [exportedIconId] = line.match(/(Sv)[a-zA-Z0-9]+/) || [];
        return `Sv${_type}Icon as ${exportedIconId}`;
    });
    const indexFileContent = `
    ${strokeDeclaration}${fillDeclaration.replace('import { SvelteComponentTyped } from "svelte";', '')}\nexport {\n  ${newExports.join(',\n  ')}\n}
  `;
    await promises_1.default.writeFile(`${packagePath}/index.d.ts`, indexFileContent.trim());
};
const removeIconDeclarationFiles = async (packagePath) => {
    const strokeFiles = await promises_1.default.readdir(`${packagePath}/stroke`);
    const fillFiles = await promises_1.default.readdir(`${packagePath}/fill`);
    const declarationFiles = [...strokeFiles, ...fillFiles].filter((fileName) => fileName.endsWith('.d.ts'));
    await Promise.all(declarationFiles.map((fileName) => {
        const _type = fileName.match(/stroke|fill/i);
        return promises_1.default.rm(`${packagePath}/${_type[0].toLowerCase()}/${fileName}`);
    }));
};
(async () => {
    const env = process.argv[2];
    if (env === '--vue') {
        await copyPackageFile(VUE_PACKAGE_PATH);
        await promises_1.default.cp(`${VUE_PACKAGE_PATH}/LICENSE`, `${VUE_PACKAGE_PATH}/package/LICENSE`);
        await promises_1.default.cp(`${VUE_PACKAGE_PATH}/README.md`, `${VUE_PACKAGE_PATH}/package/README.md`);
        await createIndexDeclarationsVue(VUE_PACKAGE_PATH);
    }
    if (env === '--svelte') {
        const strokeDeclarations = await normalizeComponentDeclarationFiles(SVELTE_PACKAGE_PATH, 'stroke');
        const fillDeclarations = await normalizeComponentDeclarationFiles(SVELTE_PACKAGE_PATH, 'fill');
        await createIndexDeclarationsSvelte(SVELTE_PACKAGE_PATH, strokeDeclarations, fillDeclarations);
        await removeIconDeclarationFiles(SVELTE_PACKAGE_PATH);
    }
})();
