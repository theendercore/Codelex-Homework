import z from "zod";
import mongoose from 'mongoose';

export const Joke = z.object({
  jokeId: z.number().positive().int()
});

const jokeSchema = new mongoose.Schema(Joke);

export const JokeModel = mongoose.model("Joke", jokeSchema);