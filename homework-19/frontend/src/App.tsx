import { useState, useEffect } from "react";
import TodoList from "./components/TodoList/TodoList";
import { TaskContext } from "./context/TaskContext";
import { TodoType } from "./assets/ts/types";
import axios from "axios";
import { getTasks } from "./api/RestAPICalls";
import { useQuery } from "@tanstack/react-query";

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
        <TodoList />
      </div>
    </TaskContext.Provider>
  );
}

export default App;
