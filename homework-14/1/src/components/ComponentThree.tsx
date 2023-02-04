import React from "react";
import log from "../assets/ts/log";
import Button from "./Button";
import { useRef } from "react";

export default function ComponentThree() {
  let goldBox = useRef<HTMLDivElement>(null);
  let cloneBox = useRef<HTMLDivElement>(null);
  let movingBox = useRef<HTMLDivElement>(null);
  return (
    <div className="ComponentThree flex flex-col gap-10">
      <h2 className="m-2 text-2xl">ComponentThree</h2>
      <div className="uzd1 flex flex-row items-center">
        <div
          ref={goldBox}
          className="box rounded-x m-2 h-12 w-12 rounded-xl border-8 border-slate-700 bg-red-700 p-10 "
        ></div>
        <Button
          onClick={() => {
            goldBox.current?.classList.remove("bg-red-700");
            goldBox.current?.classList.add("bg-yellow-600");
          }}
          text="Change color"
        />
      </div>

      <div className="uzd2 flex flex-col justify-center">
        <div className="box-box flex flex-row gap-4">
          <div
            className="cloning-box h-24 w-24 rounded-xl border-8 border-slate-700 bg-gray-400"
            ref={cloneBox}
          ></div>
        </div>
        <Button
          onClick={() => {
            cloneBox.current?.parentNode?.appendChild(
              cloneBox.current.cloneNode(true)
            );
          }}
          text="Clone Div"
        />
      </div>

      <div className="uzd3 relative m-auto flex w-full flex-col justify-center bg-slate-600 px-5 py-10 rounded-xl h-64">
        <div
          className="moveBox h-24 w-24 rounded-xl border-8 border-slate-800 bg-green-600"
          ref={movingBox}
        ></div>
        <Button onClick={()=>{
            movingBox.current?.classList.add("absolute", "top-2", "right-2");
        }} text="Send Div to Corner" />
      </div>
    </div>
  );
}
