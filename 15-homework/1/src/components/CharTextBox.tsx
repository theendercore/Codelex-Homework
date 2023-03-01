import React from "react";

type CharTextBoxProps = {
  title: string;
  subtext: string;
};

export default function CharTextBox({ title, subtext }: CharTextBoxProps) {
  return (
    <div className="pb-4">
      <h3 className="text-light text-gray-400">{title}</h3>
      <p className="text-lg text-normal">{subtext}</p>
    </div>
  );
}
