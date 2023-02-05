import React from "react";

type CharTextBoxProps = {
  title: string;
  subtext: string;
};

export default function CharTextBox({ title, subtext }: CharTextBoxProps) {
  return (
    <div className="card__subtitle-text-block">
      <h3 className="title">${title}</h3>
      <p className="subtext">${subtext}</p>
    </div>
  );
}
