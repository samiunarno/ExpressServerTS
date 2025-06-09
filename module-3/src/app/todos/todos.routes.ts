import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "../../db/todo.json");

export const todosRouter = express.Router();

todosRouter.get("/", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf8" });
  console.log("From Todo ROute");
  res.json({
    message: "From Route Arno",
    data,
  });
});

todosRouter.post("/create-todos", (req: Request, res: Response) => {
  const newdata = req.body;
  console.log(newdata);
  res.send("Todo Created");
});

todosRouter.get("/todos/:title/:body ", (req: Request, res: Response) => {
  console.log("From Query : ", req.query);
  console.log("From Params :", req.params);
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  console.log(data);

  res.json(data);
});
