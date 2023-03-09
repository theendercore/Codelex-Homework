import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";


mongoose
  .connect(process.env.DB_URI || "")
  .then(() => console.log("Database connection established"))
  .catch(console.log);

const app = express();
app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.listen(3004, () => {
  console.log("Vue Backend started on port 3004!");
});

app.get("/jokes/favorite", (req: Request, res: Response) => {
  //fetch from db
  
  res.send("Here have a joke : hahahaahha");
});

app.post("/jokes/favorite", (req, res) => {
  res.send("Added Joke");
});

app.delete("/jokes/favorite", (req, res) => {
  res.send("Deleted Joke!");
});
