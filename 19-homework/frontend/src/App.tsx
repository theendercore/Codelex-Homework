import { useState, useEffect } from "react";
import TodoList from "./components/TodoList/TodoList";
import { TaskContext } from "./context/TaskContext";
import { TodoType } from "./assets/ts/types";
import axios from "axios";
import { getTasks } from "./api/RestAPICalls";
import { useQuery } from "@tanstack/react-query";
import AddTasksFrom from "./components/AddTasksFrom";

function App() {
  const [tasksState, setTasksState] = useState<TodoType[]>([]);

  const { data, isError, error } = useQuery<TodoType[], Error>({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  useEffect(() => {
    if (data) setTasksState(data);
  }, [data]);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasksState,
        setTasks: setTasksState,
      }}
    >
      <div className="App container m-auto flex justify-center">
        <div className="ToDo m-8 flex w-1/2 flex-col items-center rounded bg-yellow-200 py-8 px-5 shadow-xl">
          <h1 className="pb-5 text-6xl font-bold">To Do App</h1>
          <AddTasksFrom />
          <TodoList />
        </div>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
