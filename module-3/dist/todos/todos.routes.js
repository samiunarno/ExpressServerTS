"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const mongodb_1 = require("../config/mongodb");
const filePath = path_1.default.join(__dirname, "../../db/todo.json");
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield mongodb_1.client.db("todosdb");
    const col = yield db.collection("todos");
    const cursor = col.find({});
    const todos = yield cursor.toArray();
    res.json(todos);
}));
exports.todosRouter.post("/create-todos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, priority } = req.body;
    const db = yield mongodb_1.client.db("todosdb");
    const col = yield db.collection("todos");
    yield col.insertOne({
        title: title,
        description: description,
        priority: priority,
        iscomplete: false,
    });
    const cursor = col.find({});
    const todos = yield cursor.toArray();
    // const { title, body } = req.body;
    // console.log(title, body);
    res.json(todos);
    // const newdata = req.body;
    // console.log(newdata);
    // res.send("Todo Created");
}));
exports.todosRouter.get("/todos/:title/:body ", (req, res) => {
    console.log("From Query : ", req.query);
    console.log("From Params :", req.params);
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log(data);
    res.json(data);
});
