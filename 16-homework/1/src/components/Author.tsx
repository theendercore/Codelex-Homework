import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUser } from "../api/apiCalls";

export default function Author({
  authorId,
  className,
}: {
  authorId: number;
  className?: string;
}) {
  const { isLoading, isError, error, data } = useQuery<User, Error>({
    queryKey: ["user", authorId],
    queryFn: ({ signal }) => getUser(authorId, signal),
  });

  if (isLoading) return <h3>Loading...</h3>;

  if (isError) return <h3>Error {JSON.stringify(error)}</h3>;

  if (data === undefined || data === null)
    return <h3>Could not get Author.</h3>;

  return (
    <div className={"user flex flex-row" + " " + className}>
      <img
        src={data.icon}
        alt={data.name + " image"}
        className="rounded-full"
      />
      <span className="text-l px-2 py-1 ">{`${data.name} ${data.surname}`}</span>
    </div>
  );
}
