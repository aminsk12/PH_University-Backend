"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const student_routes_1 = require("./app/modules/sudent/student.routes");
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1/student", student_routes_1.studenRoute);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
