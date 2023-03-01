import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getBlogPosts } from "../api/apiCalls";
import PostPreview from "../components/PostPreview/PostPreview";

export default function Posts() {
  const { isLoading, isError, error, data } = useQuery<BlogPost[], Error>(
    {
      queryKey: ["posts"],
      queryFn: ({ signal }) => getBlogPosts(signal),
    }
  );

  if (isLoading) return <h1 className="text-center text-6xl">Loading...</h1>;

  if (isError)
    return (
      <h1 className="text-center text-6xl">Error {JSON.stringify(error)}</h1>
    );

  if (!data || data.length === 0)
    return <h3 className="text-center text-xl">No Blog Posts...</h3>;
  return (
    <div className="Posts container mx-auto my-10 grid grid-cols-3 gap-6">
      {data.map((post) => (
        <PostPreview key={crypto.randomUUID()} post={post} />
      ))}
    </div>
  );
}
