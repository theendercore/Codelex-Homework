import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getComments } from "../api/apiCalls";
import Comment from "./Comment";

export default function CommentList({ commentsId }: { commentsId: number }) {
  const { isLoading, isError, error, data } = useQuery<BlogComment[], Error>({
    queryKey: ["comments", commentsId],
    queryFn: () => getComments(commentsId),
  });

  if (isLoading) return <h3 className="text-center text-6xl">Loading...</h3>;

  if (isError)
    return (
      <h3 className="text-center text-6xl">Error {JSON.stringify(error)}</h3>
    );

  if (!data || data.length === 0)
    return <h3 className="text-center text-xl">No comments...</h3>;

  return (
    <div className="CommentList comments flex flex-col items-center">
      {data.map((c) => (
        <Comment comment={c} />
      ))}
    </div>
  );
}
