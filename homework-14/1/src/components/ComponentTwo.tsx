import React, { useState } from "react";
import ClickerComponent from "./ClickerComponent";
import { useEffect } from "react";
import log from "../assets/ts/log";

export default function ComponentTwo() {
  let [clicks, setClicks] = useState(0);
  let [clicks2, setClicks2] = useState(0);
  let [textBoxValue, setTextBoxValue] = useState("");
  let [textBoxValue2, setTextBoxValue2] = useState("");

  useEffect(() => {
    log("change count ");
  }, [clicks]);

  useEffect(() => {
    log("first render");
  }, []);

  log("render");

  return (
    <div className="ComponentOne flex flex-col justify-center">
      <h2 className="m-2 text-2xl">ComponentTwo</h2>
      <ClickerComponent
        onClick={() => setClicks(clicks + 1)}
        clickDisplay={`count: ${clicks}`}
        textBoxName={"click-box-one"}
        onChange={(e) => {
          setTextBoxValue(e.target.value);
          log("input change");
        }}
        changeDisplay={textBoxValue}
      />

      <ClickerComponent
        onClick={() => setClicks2(clicks2 + 1)}
        clickDisplay={`count: ${!clicks2 ? 100 : clicks2}`}
        textBoxName={"click-box-two"}
        onChange={(e) => {
          setTextBoxValue2(e.target.value);
          document.title = textBoxValue2;
        }}
        changeDisplay={textBoxValue2}
      />
    </div>
  );
}
