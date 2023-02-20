import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: Date,
  isDone: Boolean,
});

export const TodoModel = mongoose.model("Todo", todoSchema);
