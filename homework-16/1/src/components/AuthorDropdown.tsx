import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUsers } from "../api/apiCalls";

type AuthorDropdownProps = {
  className?: string;
};

export default function AuthorDropdown({ className }: AuthorDropdownProps) {
  const { isLoading, isError, error, data } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: ({ signal }) => getUsers(signal),
  });

  if (isLoading) return <h1 className="text-center text-6xl">Loading...</h1>;

  if (isError)
    return (
      <h1 className="text-center text-6xl">Error {JSON.stringify(error)}</h1>
    );

  return (
    <select
      name="authorId"
      id="authorId"
      className={"rounded-xl bg-slate-600 py-2 px-2 " + className}
      defaultValue="1"
    >
      {data.map(({ name, surname, id }) => (
        <option key={crypto.randomUUID()} value={id}>
          {`${name} ${surname}`}
        </option>
      ))}
    </select>
  );
}
