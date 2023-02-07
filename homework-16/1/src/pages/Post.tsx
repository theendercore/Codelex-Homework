import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getBlogPost } from "../api/apiCalls";
import CommentList from "../components/CommentList";

export default function Post() {
  const { id } = useParams();
  const { isLoading, isError, error, data } = useQuery<BlogPostWithId, Error>({
    queryKey: ["post", id],
    queryFn: () => getBlogPost(id || "0"),
  });

  if (isLoading) return <h1 className="text-center text-6xl">Loading...</h1>;

  if (isError)
    return (
      <h1 className="text-center text-6xl">Error {JSON.stringify(error)}</h1>
    );

  return (
    <div className="Post container mx-auto mb-5">
      <img
        src={data.image}
        alt="fancy img"
        className="h-96 w-full rounded-3xl"
      />
      <div className="Content m-5 mt-0 flex flex-col rounded-b-3xl bg-slate-900">
        <h2 className="m-8 text-6xl font-extrabold">{data.content.title}</h2>
        <div className="text-block mx-20">
          <h3 className="mb-3 ml-1 text-3xl font-bold">
            {data.content.excerpt}
          </h3>
          <p className="text-xl ">{data.content.text}</p>
        </div>
        <div className="Footer m-5 my-10 flex w-max flex-row items-center rounded-xl bg-slate-700 px-5">
          <img
            src={data.author.icon}
            alt={data.author.name + " image"}
            className="rounded-full"
          />
          <span className="text-l py-8 px-5">{`${data.author.name} ${data.author.surname}`}</span>
        </div>
      </div>
      <CommentList commentsId={data.commentsId} />
    </div>
  );
}
