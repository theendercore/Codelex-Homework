import { useTaskContext } from "../../context/TaskContext";
import Todo from "./Todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask, updateIsDoneTask } from "../../api/RestAPICalls";
import { TaskType } from "../../assets/ts/types";

export default function TodoList() {
  const { tasks, setTasks } = useTaskContext();
  const queryClient = useQueryClient()

  const delTask = useMutation<TaskType, Error, string>({
    mutationFn: deleteTask,
    onError: console.log,
  });

  const updateTask = useMutation<
    TaskType,
    Error,
    { id: string; state: boolean }
  >({
    mutationFn: updateIsDoneTask,
    onError: console.log,
  });

  function removeTask(id: string) {
    delTask.mutate(id, {
      onSuccess: () => {
        let newTasks = tasks.filter((task) => task._id !== id);
        setTasks(newTasks);
      },
    });
  }

  function updateIsDone(id: string, state: boolean) {
    updateTask.mutate(
      { id: id, state: state },
      {
        onSuccess: ()=>{
          queryClient.invalidateQueries({ queryKey: ['tasks'] })
        },
      }
    );
  }

  return (
    <div className="TodoList w-full">
      {tasks.map((task) => (
        <Todo
          key={task._id}
          task={task}
          removeTask={removeTask}
          updateTask={updateIsDone}
        />
      ))}
    </div>
  );
}
