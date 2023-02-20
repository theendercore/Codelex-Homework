import React from "react";
import { useTaskContext } from "../../context/TaskContext";
import Todo from "./Todo/Todo";
import AddTasksFrom from "../AddTasksFrom";
import { useMutation } from "@tanstack/react-query";
import { deleteTask } from "../../api/RestAPICalls";
import { TaskType } from "../../assets/ts/types";

export default function TodoList() {
  const { tasks, setTasks } = useTaskContext();
  const delTask = useMutation<TaskType, Error, string>({
    mutationFn: (taskId) => deleteTask(taskId),
    onError: (error) => {
      console.log(error);
    },
  });
  function removeTask(id: string) {
    delTask.mutate(id, {
      onSuccess: () => {
        let newTasks = tasks.filter((task) => task._id !== id);
        setTasks(newTasks);
      },
    });
  }

  return (
    <div className="ToDo m-8 flex flex-col items-center rounded-xl bg-slate-800 p-8 ">
      <h1 className="pb-10 text-3xl">To Do App</h1>
      <AddTasksFrom />
      <div className="tasks">
        {tasks.map((task) => (
          <Todo key={task._id} task={task} removeTask={removeTask} />
        ))}
      </div>
    </div>
  );
}
