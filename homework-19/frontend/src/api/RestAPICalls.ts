import axios from "axios";
import { TaskType, TodoType } from "../assets/ts/types";

export async function getTasks() {
  let { data } = await axios.get<TodoType[]>("http://localhost:3004/todos");
  return data;
}

export async function addTask(task: TaskType) {
  let { data } = await axios.post<TodoType>("http://localhost:3004/todo", task);
  return data;
}


export async function deleteTask(id: string) {
  let { data } = await axios.delete<TodoType>(`http://localhost:3004/todo/${id}`)
  return data;
}

