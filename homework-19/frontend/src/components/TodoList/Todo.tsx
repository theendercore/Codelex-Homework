import { useState } from "react";
import { TodoType } from "../../assets/ts/types";
type TodoProps = {
  task: TodoType;
  removeTask: (id: string) => void;
};

export default function Todo({ task, removeTask }: TodoProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="ToDo flex w-full border-b border-black px-2">
      <input
        type="checkbox"
        name="isDone"
        id="isDone"
        className="h-[30px] w-[30px] self-center rounded border-0 bg-yellow-300 p-2 text-yellow-300 focus:ring-white"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <div className="flex w-full flex-col p-2 pb-0">
        <h3
          className={
            "text-xl font-bold" + (isChecked ? " italic line-through" : "")
          }
        >
          {task.title}
        </h3>
        <span
          className={
            "pl-3 text-lg italic text-gray-600" +
            (isChecked ? " line-through" : "")
          }
        >
          {task.content}
        </span>
        <span className="self-end text-sm">{`${new Date(
          task.date
        ).toDateString()}`}</span>
      </div>
      <button
        className="h-max self-center rounded-xl bg-red-400 p-2 hover:animate-wiggle focus:animate-wiggle"
        onClick={() => {
          removeTask(task._id);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="h-[20px] w-[20px]"
        >
          <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
        </svg>
      </button>
    </div>
  );
}
