import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { client } from "../config/mongodb";
import { Collection, ObjectId } from "mongodb";

const filePath = path.join(__dirname, "../../db/todo.json");

export const todosRouter = express.Router();

todosRouter.get("/", async (req: Request, res: Response) => {
  const db = await client.db("todosdb");
  const col = await db.collection("todos");

  const cursor = col.find({});
  const todos = await cursor.toArray();

  res.json(todos);
});

todosRouter.post("/create-todos", async (req: Request, res: Response) => {
  const { title, description, priority } = req.body;

  const db = await client.db("todosdb");
  const col = await db.collection("todos");
  await col.insertOne({
    title: title,
    description: description,
    priority: priority,
    iscomplete: false,
  });

  const cursor = col.find({});
  const todos = await cursor.toArray();
  // const { title, body } = req.body;
  // console.log(title, body);
  res.json(todos);
  // const newdata = req.body;
  // console.log(newdata);
  // res.send("Todo Created");
});

todosRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("todosdb");
  const col = await db.collection("todos");

  const todo = await col.findOne({ _id: new ObjectId(id) });
  res.json(todo);
});

todosRouter.get("/todos/:title/:body ", (req: Request, res: Response) => {
  console.log("From Query : ", req.query);
  console.log("From Params :", req.params);
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  console.log(data);

  res.json(data);
});
