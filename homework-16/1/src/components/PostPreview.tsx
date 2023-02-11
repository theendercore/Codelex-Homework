import React from "react";
import { Link } from "react-router-dom";

type PostsPreviewProps = {
  post: BlogPost;
};


export default function PostPreview({ post }: PostsPreviewProps) {
  return (
    <div className="post w-max overflow-hidden rounded-xl bg-slate-700">
      <img src={post.content.image} alt="#" />
      <div className="text-box flex flex-col p-5 pb-2">
        <h3 className="text-6xl text-slate-100">{post.content.title}</h3>
        <p className="text-2xl">{post.content.excerpt}</p>
        <Link to={`/post/${post.id}`} className=" self-end">
          Read more...
        </Link>
      </div>
    </div>
  );
}
