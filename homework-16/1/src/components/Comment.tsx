import React from "react";
import Author from "./Author";

export default function Comment({ comment }: { comment: BlogComment }) {
  return (
    <div
      key={comment.id}
      className="mb-5 flex w-max flex-col items-center rounded-xl bg-slate-700 px-5 py-3"
    >
      <Author authorId={comment.authorId} className="self-start" />
      <div className="comment rounded-xl bg-slate-600 py-5 px-10 ml-12">
        {comment.text}
      </div>
    </div>
  );
}
