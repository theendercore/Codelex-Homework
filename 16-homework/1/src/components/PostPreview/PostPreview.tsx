import React from "react";
import { Link } from "react-router-dom";
import "./PostPreview.css";

type PostsPreviewProps = {
  post: BlogPost;
};

export default function PostPreview({ post }: PostsPreviewProps) {
  return (
    <div className="post max-w-c w-max overflow-hidden rounded-xl bg-slate-700">
      <img src={post.image} alt="#" />
      <div className="text-box flex flex-col p-5 pb-2">
        <h3 className="text-6xl text-slate-100">{post.title}</h3>
        <p className="text-2xl">{post.excerpt}</p>
        <Link to={`/post/${post.id}`} className=" self-end">
          Read more...
        </Link>
      </div>
    </div>
  );
}
