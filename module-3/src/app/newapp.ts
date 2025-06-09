import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";

const app: Application = express();
app.use(express.json());

const filePath = path.join(__dirname, "../db/todo.json");

const todosRouter = express.Router();

// GET: Fetch all todos
todosRouter.get("/todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  // const todos = JSON.parse(data);
  console.log("from Todo Route:", data);

  res.json({
    message: "From Route Arno",
    data,
  });
});

// POST: Create new todo
todosRouter.post("/todos/create-todos", (req: Request, res: Response) => {
  const newTodo = req.body;
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  const todos = JSON.parse(data);

  todos.push(newTodo);

  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), "utf-8");

  console.log("New todo added:", newTodo);

  res.status(201).json({
    message: "Todo Created",
    todo: newTodo,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("I am Learning Node with TS");
});

app.use("/", todosRouter);

export default app;
