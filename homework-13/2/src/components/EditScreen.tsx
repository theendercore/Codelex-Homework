import React, { useState } from "react";
import { iCard } from "../assets/ts/interfaces";

type EditScreenProps = {
  // card: iCard | null;
  saveCard: saveCard | null;
};

export default function EditScreen({  saveCard }: EditScreenProps) {
  // const [outCard, setOutCard] = useState<iCard>(
  //   card === null
  //     ? {
  //         id: -1,
  //         title: "oh no",
  //         text: "big yaiks",
  //         url: "skull",
  //       }
  //     : card
  // );
  // const handleFieldChange = (e: any) =>
  //   setOutCard({ ...outCard, title: e.target.value as string });
  return saveCard === null ? (
    <></>
  ) : (
    <div className="EditScreen relative m-auto flex w-max flex-col rounded-md bg-slate-800 p-5">
      <button className=" absolute top-3 right-3 w-max rounded-full bg-cyan-900 px-3 py-1 text-slate-300" onClick={console.log}>
        X
      </button>
      <h2 className="text-3xl text-slate-300">Editing</h2>
      <input
        className="mb-3 rounded bg-slate-600 p-2 text-xl text-slate-400"
        type="text"
        placeholder="Title"
        required
        // defaultValue={card.title}
        // onChange={handleFieldChange}
      />
      <input
        className="mb-3 rounded bg-slate-600 p-2 text-xl text-slate-400"
        type="text"
        placeholder="Description"
        required
        // defaultValue={card.text}
      />
      <input
        className="mb-3 rounded bg-slate-600 p-2 text-xl text-slate-400"
        type="text"
        placeholder="URL"
        required
        // defaultValue={card.url}
      />
      <button
        className="w-max self-center rounded bg-slate-600 px-3 py-1 text-slate-200 hover:bg-slate-700 hover:text-slate-300"
        // onClick={() => saveCard(outCard)}
      >
        Save
      </button>
    </div>
  );
}
