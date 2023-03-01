import React from "react";
import Button from "./Button";

type ClickerComponentProps = {
  onClick: () => void;
  clickDisplay: string;
  textBoxName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeDisplay: string;
};
export default function ClickerComponent({
  onClick,
  clickDisplay,
  textBoxName,
  onChange,
  changeDisplay,
}: ClickerComponentProps) {
  return (
    <div className="ClickerComponent flex flex-col">
      <Button onClick={onClick} text="+" />
      <div className="m-2 w-max rounded-xl bg-slate-700 px-20 py-2">
        {clickDisplay}
      </div>
      <input
        type="text"
        name={textBoxName}
        id={textBoxName}
        onChange={onChange}
        value={changeDisplay}
        className="m-3 rounded-xl bg-slate-900 p-2 text-slate-400 w-max"
      />
      <div>{changeDisplay}</div>
    </div>
  );
}
