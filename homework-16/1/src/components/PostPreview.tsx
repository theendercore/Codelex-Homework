import React from "react";
import { Link } from "react-router-dom";

export default function PostPreview() {
  return (
    <div className="post w-max overflow-hidden rounded-xl bg-slate-700">
      <img src={"https://picsum.photos/id/3/500/350"} alt="#" />
      <div className="text-box flex flex-col p-5 pb-2">
        <h3 className="text-6xl text-slate-100">{"Title"}</h3>
        <p className="text-2xl">{"Text"}</p>
        <Link to={`/post/${0}`} className=" self-end">
          Read more...
        </Link>
      </div>
    </div>
  );
}
