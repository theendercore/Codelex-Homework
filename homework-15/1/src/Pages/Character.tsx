import React from "react";
import { useParams } from "react-router-dom";
import CharTextBox from "../components/CharTextBox";

export default function Characters() {
  const { id } = useParams();
  // return <div>Character {id}</div>;

  return (
    <div className="card">
      <img src="${img}" alt="charter" className="card__img" />
      <div className="card__text-area">
        <div className="card__title">
          <h2 className="card__title-text">{"name"}</h2>
          <p className="card_title-subtext">
            <div className="circle + getStatus(status) +"></div>
            {"status"} - {"species"}
          </p>
        </div>
        <div className="card__subtitle">
          <CharTextBox title={"Origins:"} subtext={"origins"} />
          <CharTextBox title={"Last know location:"} subtext={"location"} />
          <CharTextBox title={"First seen in:"} subtext={"firstSeen"} />
        </div>
      </div>
    </div>
  );
}
