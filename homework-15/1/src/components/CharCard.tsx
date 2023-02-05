import React from "react";
import CharTextBox from "./CharTextBox";

export default function CharCard({ char }: { char: Character }) {
  return (
    <div className="overflow-hidden rounded-xl bg-gray-900 shadow-xl">
      <img src={char.image} alt="charter" className="w-full" />
      <div className="p-6">
        <div className="pb-6">
          <h2 className="text-xl font-extrabold">{char.name}</h2>
          <p className="txt-md font-bold">
            <div
              className={
                "mr-2 ml-1 inline-block h-2.5 w-2.5 rounded-full" +
                (char.status === "Alive"
                  ? " bg-green-500"
                  : char.status === "Dead"
                  ? " bg-red-600"
                  : " bg-gray-400")
              }
            ></div>
            {char.status} - {char.species}
          </p>
        </div>
        <div>
          <CharTextBox title={"Origins:"} subtext={char.origin.name} />
          <CharTextBox title={"Last know location:"} subtext={char.location.name} />
          <CharTextBox title={"First seen in:"} subtext={char.url} />
        </div>
      </div>
    </div>
  );
}
