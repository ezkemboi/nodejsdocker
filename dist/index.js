"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rebitMq_1 = __importDefault(require("./services/rebitMq"));
// Constants
const PORT = 5000;
const HOST = "0.0.0.0";
// App
const app = express_1.default();
app.get("/", (req, res) => {
    rebitMq_1.default("codingtest", "send", (value) => {
        res.send(value);
    });
});
app.listen(PORT, HOST);
//# sourceMappingURL=index.js.map