import { createContext, useContext } from "react";
import { TodoType } from "../assets/ts/types";

type TaskContextType = {
  tasks: TodoType[];
  setTasks?: Function;
};

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
});

export const useTaskContext = () => {
  const { tasks, setTasks } = useContext(TaskContext);

  if (!setTasks) throw Error("setTask function is mandatory in TaskContext");

  return {tasks, setTasks};
};
