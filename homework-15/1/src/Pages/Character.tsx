import React from "react";
import { useParams } from "react-router-dom";
import CharCard from "../components/CharCard";
import CharTextBox from "../components/CharTextBox";

export default function Characters() {
  const { id } = useParams();

  return (
    <div className="container mx-auto my-5">
      <CharCard
        char={{
          id: 1,
          name: "ender",
          status: "Dead",
          species: "gremlin",
          type: "gremlin",
          gender: "end",
          origin: { name: "aa", url: "aa" },
          location: { name: "aa", url: "aa" },
          image: "url",
          episode: [],
          url: "aaa",
          created: "aa",
        }}
      />
    </div>
  );
}
