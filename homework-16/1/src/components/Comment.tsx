import React from "react";

export default function Comment({ comment }: { comment: BlogComment }) {
  return (
    <div
      key={comment.id}
      className="flex w-max flex-row items-center rounded-xl bg-slate-700 px-5 mb-5"
    >
      <div className="user flex flex-row p-5">
        <img
          src={comment.author.icon}
          alt={comment.author.name + " image"}
          className="rounded-full"
        />
        <span className="text-l px-2 py-1 ">{`${comment.author.name} ${comment.author.surname}`}</span>
      </div>
      <div className="comment rounded-xl bg-slate-600 py-5 px-10">
        {comment.text}
      </div>
    </div>
  );
}
