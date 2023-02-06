import React from "react";
import PostPreview from "../components/PostPreview";

export default function Posts() {
  return (
    <div className="Posts container mx-auto my-10 ">
      <PostPreview
        post={{
          id: 1,
          image: "https://picsum.photos/id/3/500/350",
          title: "title",
          content: {
            excerpt: "Wow so interesting",
            text: "text",
          },
          author: {
            name: "end",
            surname: "end 2",
            icon: "https://picsum.photos/id/69/50",
          },
          comments: [],
        }}
      />
    </div>
  );
}
