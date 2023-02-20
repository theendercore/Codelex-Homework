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
    <div>
      <form
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          task.title = task.title.trim();
          task.content = task.content.trim();
          addNewTask.mutate(task);
        }}
        className="flex flex-col p-2"
      >
        <input
          type="text"
          name="title"
          id="title"
          placeholder={"Add new task..."}
          className="m-2 rounded-xl bg-slate-500 p-2 text-slate-200"
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
              className="m-2 rounded-xl bg-slate-500 p-2 text-slate-200"
              placeholder={"Content..."}
              value={task.content}
              onChange={(e) => setTask({ ...task, content: e.target.value })}
            />
            <input
              type="date"
              name="date"
              id="date"
              className="m-2 rounded-xl bg-slate-500 p-2 text-slate-200"
              onChange={(e) =>
                setTask({ ...task, date: new Date(e.target.value) })
              }
            />
            <button className=" w-max self-center rounded-xl bg-slate-900 p-2 text-xl hover:bg-slate-600">
              ADD
            </button>{" "}
          </>
        )}
      </form>
    </div>
  );
}
