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
const todosRouter = express_1.default.Router();
// GET: Fetch all todos
todosRouter.get("/todos", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    // const todos = JSON.parse(data);
    console.log("from Todo Route:", data);
    res.json({
        message: "From Route Arno",
        data,
    });
});
// POST: Create new todo
todosRouter.post("/todos/create-todos", (req, res) => {
    const newTodo = req.body;
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs_1.default.writeFileSync(filePath, JSON.stringify(todos, null, 2), "utf-8");
    console.log("New todo added:", newTodo);
    res.status(201).json({
        message: "Todo Created",
        todo: newTodo,
    });
});
app.get("/", (req, res) => {
    res.send("I am Learning Node with TS");
});
app.use("/", todosRouter);
exports.default = app;
