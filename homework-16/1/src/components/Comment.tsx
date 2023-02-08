import React from "react";
import Author from './Author';

export default function Comment({ comment }: { comment: BlogComment }) {
  return (
    <div
      key={comment.id}
      className="flex w-max flex-row items-center rounded-xl bg-slate-700 px-5 mb-5"
    >
     <Author authorId={comment.authorId}/> 
      <div className="comment rounded-xl bg-slate-600 py-5 px-10">
        {comment.text}
      </div>
    </div>
  );
}
