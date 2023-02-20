import React from "react";
import { useTaskContext } from "../../context/TaskContext";
import Todo from "./Todo/Todo";
import AddTasksFrom from "../AddTasksFrom";

export default function TodoList() {
  const { tasks } = useTaskContext();

  
  return (
    <div className="ToDo m-8 flex flex-col items-center rounded-xl bg-slate-800 p-8 ">
      <h1 className="pb-10 text-3xl">To Do App</h1>
      <AddTasksFrom />
      <div className="tasks">
        {tasks.map((task) => (
          <Todo key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}
