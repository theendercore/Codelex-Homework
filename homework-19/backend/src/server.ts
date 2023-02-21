import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import { TodoModel } from "./assets/model/todo";
import { todoZodSchema } from "./assets/ts/zod.types";
import { respond } from "./assets/ts/func";

const app = express();

async function main() {
  mongoose.set("strictQuery", true);
  await mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("Database connection established"))
    .catch(console.log);
}

main();
app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  respond(
    res,
    200,
    `<h1>Available end points :</h1>
      <h3>GET</h3> 
      - <a href="./todos">/todos</a>
      <h3>POST | PATCH | DELETE</h3> 
      - <a href="./todo">/todo:id</a>`
  );
});

app.get("/todos", async (req: Request, res: Response) => {
  respond(res, 200, await TodoModel.find());
});

app.post("/todo", async (req: Request, res: Response) => {
  try {
    respond(res, 201, await TodoModel.create(todoZodSchema.parse(req.body)));
  } catch (err) {
    respond(res, 500, err);
  }
});

app.delete("/todo/:id", async (req: Request, res: Response) => {
  TodoModel.deleteOne({ _id: req.params.id })
    .then((data) => respond(res, 200, data))
    .catch((err) => respond(res, 500, err));
});

app.patch("/todo/:id", async (req: Request, res: Response) => {
  TodoModel.updateOne(
    { _id: req.params.id },
    { $set: { isDone: req.body.isDone } }
  )
    .then((data) => respond(res, 200, data))
    .catch((err) => respond(res, 500, err));
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
