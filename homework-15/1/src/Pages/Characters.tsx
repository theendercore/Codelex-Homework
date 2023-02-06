import React from "react";
import { Link } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import Container from "../components/Container";
import CharCard from "../components/CharCard";
import { getChars, getCharsParams } from "../api/chars";

export default function Characters() {
  const {
    isLoading,
    isError,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    data,
  } = useInfiniteQuery({
    queryKey: ["chars"],
    queryFn: getCharsParams,
    getNextPageParam: (lastPage) =>
      !lastPage.info.next ? lastPage.info.next?.split("=")[-1] : undefined,
    keepPreviousData: true,
  });

  if (isLoading) return <Container input={<h1>Loading...</h1>} />;

  if (isError)
    return <Container input={<h1>Error {JSON.stringify(error)}</h1>} />;

  return (
    <div className="container mx-auto my-5">
      <h2 className="my-8 text-center text-4xl font-extrabold">Characters</h2>
      <div className="grid grid-cols-4 gap-10">
        {data.pages.map(({ results }) =>
          results.map((char) => <CharCard key={char.id} char={char} />)
        )}
      </div>
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </button>
    </div>
  );
}
