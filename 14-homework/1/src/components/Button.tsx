import React from "react";

type Component = {
  onClick?: () => void;
  text?: string;
  addClasses?: string;
};

export default function Button({ onClick, text, addClasses }: Component) {
  return (
    <button
      onClick={onClick}
      className={
        "m-3 w-max rounded-xl bg-slate-900 px-2 text-3xl text-slate-500 hover:bg-slate-700 hover:text-slate-300" +
        (addClasses !== undefined && " " + addClasses)
      }
    >
      {text}
    </button>
  );
}
