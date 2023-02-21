import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import { TodoModel } from "./assets/model/todo";
import { todoZodSchema } from "./assets/ts/zod.types";

const app = express();

async function main() {
  mongoose.set("strictQuery", true);
  await mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("mongo ON"))
    .catch((err) => console.log(err));
}

main();
app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send(`Available end points :
  <br/> <h3>GET</h3> 
  <br/> - <a href="./todos">/todos</a>
  <br/> <h3>POST</h3> 
  <br/> - <a href="./todo">/todo</a>
  `);
});

app.get("/todos", async (req: Request, res: Response) => {
  res.send(await TodoModel.find());
});

app.post("/todo", async (req: Request, res: Response) => {
  try {
    let returnData = await TodoModel.create(todoZodSchema.parse(req.body));
    res.status(201).send(returnData);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

app.delete("/todo/:id", async (req: Request, res: Response) => {
  TodoModel.deleteOne({ _id: req.params.id })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.patch("/todo/:id", async (req: Request, res: Response) => {
  TodoModel.updateOne({ _id: req.params.id }, {$set:{isDone: req.body.isDone}})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
