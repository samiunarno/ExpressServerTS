import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
const app: Application = express();

app.use(express.json());
const todosRouter = express.Router();

app.use("/todos", todosRouter);

todosRouter.get("/all-todos", (req: Request, res: Response) => {
  // console.log("From Query : ", req.query);
  // console.log("From Params :", req.params);
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  console.log("from Todo Route :", data);

  res.json({
    message: "From Route Arno",
    data,
  });
});

const filePath = path.join(__dirname, "../db/todo.json");

app.get("/", (req: Request, res: Response) => {
  //   console.log({ req, res });
  res.send("I am Learning Node with TS");
});

app.get("/todos/:title/:body ", (req: Request, res: Response) => {
  console.log("From Query : ", req.query);
  console.log("From Params :", req.params);
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  console.log(data);

  res.json(data);
});

app.post("/todos/create-todos", (req: Request, res: Response) => {
  const newdata = req.body;
  console.log(newdata);
  res.send("Todo Created");
});

export default app;
