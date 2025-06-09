"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "../../db/todo.json");
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get("/", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf8" });
    console.log("From Todo ROute");
    res.json({
        message: "From Route Arno",
        data,
    });
});
exports.todosRouter.post("/create-todos", (req, res) => {
    const newdata = req.body;
    console.log(newdata);
    res.send("Todo Created");
});
exports.todosRouter.get("/todos/:title/:body ", (req, res) => {
    console.log("From Query : ", req.query);
    console.log("From Params :", req.params);
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log(data);
    res.json(data);
});
