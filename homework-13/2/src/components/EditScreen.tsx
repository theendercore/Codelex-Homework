import React from "react";
import { iCard } from "../assets/ts/interfaces";

export default function EditScreen() {
  return (
    <div className="EditScreen m-auto flex w-max flex-col rounded-md bg-slate-800 p-5">
      <h2 className="text-3xl text-slate-300">Add New</h2>
      <input
        className="mb-3 rounded bg-slate-600 p-2 text-xl text-slate-400"
        type="text"
        placeholder="Title"
        required
        // value={card.title}
      />
      <input
        className="mb-3 rounded bg-slate-600 p-2 text-xl text-slate-400"
        type="text"
        placeholder="Description"
        required
        // value={card.text}
      />
      <input
        className="mb-3 rounded bg-slate-600 p-2 text-xl text-slate-400"
        type="text"
        placeholder="URL"
        required
        // value={card.img}
      />
      <button className="w-max self-center rounded bg-slate-600 px-3 py-1 text-slate-200 hover:bg-slate-700 hover:text-slate-300">
        Edit
      </button>
    </div>
  );
}
