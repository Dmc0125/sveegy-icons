"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
const packagePath = path_1.default.join(__dirname, '../../packages/svelte/package/package.json');
const loadPackageJson = async () => {
    const packageString = await promises_1.default.readFile(packagePath, 'utf-8');
    const packageOptions = JSON.parse(packageString);
    return packageOptions;
};
/**
 * @description rewrite paths from './(stroke|fill)/(icon)(fill|stroke)' to './(icon)(fill|stroke)
 */
const rewritePaths = (options) => (Object.fromEntries(Object.entries(options).map((keyValue) => {
    const [exportPath, filePath] = keyValue;
    if (!exportPath.match(/fill|stroke/g)) {
        return [exportPath, filePath];
    }
    return [
        exportPath.replace(/\.\/(fill|stroke)\//, './'),
        filePath,
    ];
})));
(async () => {
    const oldPackage = await loadPackageJson();
    const packageExports = rewritePaths(oldPackage.exports);
    await promises_1.default.writeFile(packagePath, JSON.stringify({ ...oldPackage, exports: packageExports }, null, 2));
})();
