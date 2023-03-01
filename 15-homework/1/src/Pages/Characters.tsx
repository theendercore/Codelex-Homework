import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import Container from "../components/Container";
import CharCard from "../components/CharCard";
import { getCharsParams } from "../api/chars";

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
    getNextPageParam: (lastPage) => lastPage.info.next?.split("=").pop(),
  });

  if (isLoading) return <Container input={<h1>Loading...</h1>} />;

  if (isError)
    return <Container input={<h1>Error {JSON.stringify(error)}</h1>} />;

  return (
    <div className="container mx-auto my-5 flex flex-col items-center">
      <h2 className="my-8 text-center text-4xl font-extrabold">Characters</h2>
      <div className="grid grid-cols-4 gap-10">
        {data.pages.map(({ results }, i) => (
          <React.Fragment key={i}>
            {results.map((char) => (
              <CharCard key={char.id} char={char} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        className="m-10 rounded-xl bg-slate-700 px-10 py-4 shadow-xl hover:bg-slate-900 hover:text-slate-100"
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
