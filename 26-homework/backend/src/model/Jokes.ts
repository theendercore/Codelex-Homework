import z, { number } from "zod";
import mongoose from "mongoose";

export const Joke = z.object({
  jokeId: z.number().nonnegative().int()
  
});

const jokeSchema = new mongoose.Schema({
  jokeId: Number
});

const JokeModel = mongoose.model("Joke", jokeSchema);
export default JokeModel;
