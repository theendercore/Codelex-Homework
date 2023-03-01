import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { addTask } from "../api/RestAPICalls";
import { TaskType, TodoType } from "../assets/ts/types";
import { useTaskContext } from "../context/TaskContext";

export default function AddTasksFrom() {
  const { tasks, setTasks } = useTaskContext();
  const [task, setTask] = useState<Omit<TaskType, "isDone">>({
    title: "",
    content: "",
    date: new Date(),
  });

  const addNewTask = useMutation<TodoType, Error, Omit<TaskType, "isDone">>({
    mutationFn: (taskIn) => addTask({ ...taskIn, isDone: false }),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      setTasks([...tasks, data]);
    },
  });

  return (
    <form
      action="submit"
      onSubmit={(e) => {
        e.preventDefault();
        task.title = task.title.trim();
        task.content = task.content.trim();
        addNewTask.mutate(task);
      }}
      className={
        "relative flex flex-col p-2" + (task.title.length > 0 ? " w-full" : "")
      }
    >
      <input
        type="text"
        name="title"
        id="title"
        placeholder={"Add new task..."}
        className={
          "my-2 rounded border-0 bg-yellow-300 p-2 focus:ring-white" +
          (task.title.length > 0 ? " w-full" : "")
        }
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />
      {task.title.length > 0 && (
        <>
          <input
            type="text"
            name="content"
            id="content"
            className="my-2 w-full rounded border-0 bg-yellow-300 p-2 focus:ring-white text-gray-600"
            placeholder={"Content..."}
            value={task.content}
            onChange={(e) => setTask({ ...task, content: e.target.value })}
            required
          />
          <input
            type="date"
            name="date"
            id="date"
            className="my-2 self-end rounded border-0 bg-yellow-300 p-2 focus:ring-white"
            onChange={(e) =>
              setTask({ ...task, date: new Date(e.target.value) })
            }
          />
          <button className="absolute bottom-3 self-center rounded-xl bg-green-400 p-2 text-xl hover:bg-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-[30px] w-[30px]"
            >
              <path d="M200 344V280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H200V168C200 154.7 210.7 144 224 144C237.3 144 248 154.7 248 168V232H312C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H248V344C248 357.3 237.3 368 224 368C210.7 368 200 357.3 200 344zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z" />
            </svg>
          </button>
        </>
      )}
    </form>
  );
}
