"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    return res.json('Hello World!');
});
router.post('/cnpj', (req, res) => {
    const requestBody = req.body;
    try {
        return res.status(http_status_codes_1.default.UNAUTHORIZED).json({ requestBody });
    }
    catch (error) {
        //return res.status().json({ error: error.message });
    }
});
