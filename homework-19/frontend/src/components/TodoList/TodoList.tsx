import { useTaskContext } from "../../context/TaskContext";
import Todo from "./Todo";
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
    <div className="ToDo w-max-[600px] m-8 flex flex-col items-center rounded bg-yellow-200 py-8 px-5 shadow-xl">
      <h1 className="pb-10 text-6xl font-bold">To Do App</h1>
      <AddTasksFrom />
      <div className="tasks w-full">
        {tasks.map((task) => (
          <Todo key={task._id} task={task} removeTask={removeTask} />
        ))}
      </div>
    </div>
  );
}
