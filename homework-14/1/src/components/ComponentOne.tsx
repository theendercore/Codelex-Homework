import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { Colors, ColorsList } from "../types.d";
import { Color } from "../../../../homework-8/src/assets/ts/color";
import "./ComponentOne.css";

export default function ComponentOne() {
  let [text1, setText1] = useState("");
  let [text2, setText2] = useState("");
  let [list, setList] = useState<string[]>([]);

  let [buttonState, setButtonState] = useState(true);
  let [count, setCount] = useState(0);

  let [colors, setColors] = useState<string[]>([]);
  let [color, setColor] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setButtonState(false);
    }, 5000);
  }, []);

  return (
    <div className="ComponentOne flex flex-col justify-center">
      <h2 className="m-2 text-2xl">ComponentOne</h2>
      <>
        <form
          action="submit"
          onSubmit={(e) => {
            e.preventDefault();
            setList([text1.trim(), text2.trim()]);
          }}
        >
          <input
            type="text"
            name="text-1"
            id="text-1"
            placeholder="Write something..."
            className="m-3 rounded-xl bg-slate-900 p-2 text-slate-400"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            autoFocus={true}
          />
          <br />
          <input
            type="text"
            name="text-2"
            id="text-2"
            placeholder="Write something..."
            className="m-3 rounded-xl bg-slate-900 p-2 text-slate-400"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
          />
          <input
            type="submit"
            value="Submit"
            className="w-max rounded-full bg-slate-500 px-4 py-2 text-slate-900 hover:bg-slate-300 hover:text-slate-700"
          />
        </form>
        <span className="text-color-400 p-4">{JSON.stringify(list)}</span>
      </>

      <>
        <button
          className={
            (buttonState ? "cursor-not-allowed " : " ") +
            "m-3 w-max rounded-xl bg-slate-900 p-2 text-slate-500 hover:bg-slate-700 hover:text-slate-300"
          }
          disabled={buttonState}
          onClick={() => {
            alert("click");
          }}
        >
          POGA
        </button>
        <button
          className="m-3 w-max rounded-xl bg-slate-900 p-2 text-slate-500 hover:bg-slate-700 hover:text-slate-300 "
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count: {count}
        </button>
        <div className="m-2 w-max rounded-xl bg-slate-700 px-20 py-2">
          {count * 2}
        </div>
      </>

      <>
        <form
          className="flex flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            color && setColors([...colors, color]);
          }}
        >
          <button className="m-3 w-max rounded-xl bg-slate-900 px-2 text-3xl text-slate-500 hover:bg-slate-700 hover:text-slate-300">
            +
          </button>
          <select
            name="colorDropdown"
            id="colorDropdown"
            onChange={(e) => setColor(e.target.value)}
            value={color}
            className="m-3 w-max border-none bg-slate-700 p-2"
          >
            {ColorsList.map((e) => {
              return (
                <option value={e} key={crypto.randomUUID()}>
                  {e}
                </option>
              );
            })}
          </select>
        </form>
        <div className="divArray flex flex-row gap-3">
          {colors.map((e) => (
            <div
              className={
                e +
                " h-12 w-12 overflow-hidden rounded-xl border-2 border-solid border-slate-600"
              }
              key={crypto.randomUUID()}
            ></div>
          ))}
        </div>
      </>
    </div>
  );
}
