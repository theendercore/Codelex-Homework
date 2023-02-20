import React from "react";
import { TodoType } from "../../../assets/ts/types";
type TodoProps = {
  task: TodoType;
};

export default function Todo({ task }: TodoProps) {
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
    </div>
  );
}
