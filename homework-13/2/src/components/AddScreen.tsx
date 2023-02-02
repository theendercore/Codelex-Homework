import React, { useState } from "react";
import { iCard } from "../assets/ts/interfaces";

type AddScreenProps = {
  addCard: saveCard;
};

export default function AddScreen({ addCard }: AddScreenProps) {
  const [cardName, setCardName] = useState("");
  const [cardText, setCardText] = useState("");
  const [cardURL, setCardURL] = useState("https://picsum.photos/id/1/300");

  const validate = () => {
    if (
      cardName.trim() === "" ||
      cardText.trim() === "" ||
      cardURL.trim() === ""
    ) {
      alert("Please enter all the values!");
    } else {
      addCard({ title: cardName, text: cardText, url: cardURL });
    }
  };

  return (
    <div className="EditScreen m-auto flex w-max flex-col rounded-md bg-slate-800 p-5">
      <h2 className="text-3xl text-slate-300 pb-3">Add New</h2>
      <input
        className="mb-3 rounded bg-slate-600 p-2 text-xl text-slate-400"
        type="text"
        placeholder="New Title"
        required
        onChange={(e) => setCardName(e.target.value.trim())}
      />
      <input
        className="mb-3 rounded bg-slate-600 p-2 text-xl text-slate-400"
        type="text"
        placeholder="New Description"
        required
        onChange={(e) => setCardText(e.target.value.trim())}
      />
      <input
        className="mb-3 rounded bg-slate-600 p-2 text-xl text-slate-400"
        type="text"
        placeholder="New URL"
        defaultValue="https://picsum.photos/id/1/300"
        required
        onChange={(e) => setCardURL(e.target.value.trim())}
      />
      <button
        className="w-max self-center rounded bg-slate-600 px-3 py-1 text-slate-200 hover:bg-slate-700 hover:text-slate-300"
        onClick={validate}
      >
        Save
      </button>
    </div>
  );
}
