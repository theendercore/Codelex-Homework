import React from "react";
import { TodoType } from "../../../assets/ts/types";
type TodoProps = {
  task: TodoType;
  removeTask: (id: string) => void;
};

export default function Todo({ task, removeTask }: TodoProps) {
  return (
    <div className="ToDo mx-2 flex justify-center px-2">
      <input
        type="checkbox"
        name="isDone"
        id="isDone"
        className="p-2"
        checked
        readOnly
      />
      <h3 className="p-2">{task.title}</h3>
      <span className="p-2">{task.content}</span>
      <span className="p-2">{task.date.toString()}</span>
      <button
        className="rounded-2xl bg-cyan-600 p-2"
        onClick={() => {
          removeTask(task._id);
        }}
      >
        del
      </button>
    </div>
  );
}
