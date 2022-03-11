"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectFirestore = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, } = process.env;
const app = (0, app_1.initializeApp)({
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
});
const disconnectFirestore = async () => {
    await (0, app_1.deleteApp)(app);
};
exports.disconnectFirestore = disconnectFirestore;
const db = (0, firestore_1.getFirestore)(app);
const getIcons = async () => {
    const iconsSnapshot = await (0, firestore_1.getDocs)((0, firestore_1.collection)(db, 'icons'));
    const icons = [];
    iconsSnapshot.forEach((icon) => {
        const { stroke, fill } = icon.data();
        icons.push({
            id: icon.id,
            stroke,
            fill,
        });
    });
    return icons;
};
exports.default = getIcons;
