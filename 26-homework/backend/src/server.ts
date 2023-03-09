import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import JokeModel, { Joke } from "./model/Jokes";
import { request } from "http";
import { ZodError } from "zod";

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

app.get("/jokes/favorite", async (req, res) => {
  let jokes = await JokeModel.find();
  res.json(jokes);
});

app.post("/jokes/favorite", async (req, res) => {
  try {
    let parsedJokeId = Joke.parse(req.body);

    let possibleObj = await JokeModel.find({ jokeId: parsedJokeId.jokeId });

    if (possibleObj.length > 0) {
      console.log("Already exists : ", possibleObj);
      return res.json({ response: "Failure" });
    }

    await JokeModel.create(parsedJokeId);
    res.json({ response: "Success" });
  } catch (e) {
    if (e instanceof ZodError) {
      console.log("Zod Error! Failed to Parse incoming Data. ", e);
      res.json({ response: "Failure" });
    } else {
      console.log("how did this happen? ", e);
      res.json({ response: "Failure" });
    }
  }
});

app.delete("/jokes/favorite", async (req, res) => {
  //delete from db
  try {
    let parsedJokeId = Joke.parse(req.body);

    let deleteResult = await JokeModel.deleteOne({
      jokeId: parsedJokeId.jokeId
    });

    if (!deleteResult.acknowledged) {
      console.log("Failed to Delete or Nothing to Delete!");
      return res.json({ response: "Failure" });
    }

    res.json({ response: "Success" });
  } catch (e) {
    if (e instanceof ZodError) {
      console.log("Zod Error! Failed to Parse incoming Data. ", e);
      res.json({ response: "Failure" });
    } else {
      console.log("Generic Error ", e);
      res.json({ response: "Failure" });
    }
  }
});
