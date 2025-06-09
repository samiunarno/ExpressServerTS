"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const filePath = path_1.default.join(__dirname, "../db/todo.json");
app.get("/", (req, res) => {
    //   console.log({ req, res });
    res.send("I am Learning Node with TS");
});
app.get("/todos/:title/:body", (req, res) => {
    console.log("From Query : ", req.query);
    console.log("From Params :", req.params);
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log(data);
    res.json(data);
});
app.post("/todos/create-todos", (req, res) => {
    const newdata = req.body;
    console.log(newdata);
    res.send("Todo Created");
});
exports.default = app;
