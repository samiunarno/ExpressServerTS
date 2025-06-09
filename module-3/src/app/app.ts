import express, { Application, Request, Response } from "express";
import { todosRouter } from "./todos/todos.routes";

const app: Application = express();

app.use(express.json());

const userRouter = express.Router();

app.use("/todos", todosRouter);
app.use("/users", userRouter);

// app.get("/", (req: Request, res: Response) => {
//   //   console.log({ req, res });
//   res.send("I am Learning Node with TS");
// });

export default app;
