import React from "react";
import { useParams } from "react-router-dom";
import CharCard from "../components/CharCard";
import CharTextBox from "../components/CharTextBox";
import { getCharByID, getEpisode } from "../api/chars";
import { useQuery } from "@tanstack/react-query";
import Container from "../components/Container";

export default function Characters() {
  const { id } = useParams();

  const charQuery = useQuery({
    queryKey: ["character", id],
    queryFn: async (context) => await getCharByID(context.queryKey[1]!!),
  });

  if (charQuery.isLoading) return <Container input={<h1>Loading...</h1>} />;

  if (charQuery.isError)
    return (
      <Container input={<h1>Error {JSON.stringify(charQuery.error)}</h1>} />
    );

  let char = charQuery.data;

  return (
    <div className="container mx-auto my-5">
      <div className="overflow-hidden rounded-3xl bg-gray-900 shadow-xl flex flex-row">
        <img src={char.image} alt="charter" className="w-2/6 shadow-inner" />
        <div className="p-6">
          <div className="pb-6">
            <h2 className="text-xl font-extrabold">{char.name}</h2>
            <div className="txt-md font-bold">
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
            </div>
          </div>
          <div>
            <CharTextBox title={"Origins:"} subtext={char.origin.name} />
            <CharTextBox
              title={"Last know location:"}
              subtext={char.location.name}
            />
            <CharTextBox title={"First seen in:"} subtext={char.episode[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
