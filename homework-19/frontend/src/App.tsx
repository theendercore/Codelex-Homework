import { useState, useEffect } from "react";
import TodoList from "./components/TodoList/TodoList";
import { TaskContext } from "./context/TaskContext";
import { TodoType } from "./assets/ts/types";
import axios from "axios";
import { getTasks } from "./api/RestAPICalls";
import { useQuery } from "@tanstack/react-query";

function App() {
  const [tasksState, setTasksState] = useState<TodoType[]>([]);

  // const { data, isError, error } = useQuery<TodoType[], Error>({
  //   queryKey: ["tasks"],
  //   queryFn: getTasks,
  // });

  useEffect(() => {
    getTasks()
      .then((data) => {
        console.log(data);
        setTasksState(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasksState,
        setTasks: setTasksState,
      }}
    >
      <div className="App container m-auto ">
        <TodoList />
      </div>
    </TaskContext.Provider>
  );
}

export default App;
