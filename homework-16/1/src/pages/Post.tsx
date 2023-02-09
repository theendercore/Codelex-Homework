import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { editBlogPost, getBlogPost, postComment } from "../api/apiCalls";
import CommentList from "../components/CommentList";
import Author from "../components/Author";
import Popup from "../components/Popup/Popup";
import { toast } from "react-toastify";

export default function Post() {
  const queryClient = useQueryClient();
  const [popup, setPopup] = useState(false);
  const { id } = useParams();

  if (id === undefined) return <h1>"Error!"</h1>;

  const { isLoading, isError, error, data } = useQuery<BlogPost, Error>({
    queryKey: ["post", id],
    queryFn: ({ signal }) => getBlogPost(id, signal),
  });

  const mutation = useMutation<
    BlogPost,
    Error,
    {
      id: number;
      image?: string;
      content?: BlogContent;
    }
  >({
    mutationFn: (editedPost) => editBlogPost(editedPost),
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post", id] });
      toast.success("Blog Post Edited!");
    },
  });

  if (isLoading || mutation.isLoading)
    return <h1 className="text-center text-6xl">Loading...</h1>;

  if (isError || mutation.isError)
    return (
      <h1 className="text-center text-6xl">Error {JSON.stringify(error)}</h1>
    );

  function handleEditPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    mutation.mutate({
      id: Number(id),
      image: formData.get("image")!.toString().trim(),
      content: {
        title: formData.get("title")!.toString().trim(),
        excerpt: formData.get("excerpt")!.toString().trim(),
        text: formData.get("text")!.toString().trim(),
      },
    });
    setPopup(false);
  }

  return (
    <div className="Post container relative mx-auto mb-5">
      <button
        onClick={() => setPopup(true)}
        className="absolute top-2 right-2 w-max rounded-full bg-slate-800 px-4 py-2 text-xl text-slate-400 hover:bg-slate-900 hover:text-slate-200"
      >
        Edit Blog
      </button>
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
          <Author authorId={data.authorId} className="py-2" />
        </div>
      </div>
      <Popup open={popup} onClose={() => setPopup(false)}>
        <form
          onSubmit={handleEditPost}
          className="flex flex-col items-center justify-center"
        >
          <label className="mb-2 flex flex-col p-2">
            Title
            <input
              type="text"
              name="title"
              id="title"
              className="rounded-xl bg-slate-600 py-1 px-2"
              defaultValue={data.content.title}
              required
            />
          </label>
          <label className="mb-2 flex flex-col p-2">
            Header
            <input
              type="text"
              name="excerpt"
              id="excerpt"
              className="rounded-xl bg-slate-600 py-1 px-2"
              defaultValue={data.content.excerpt}
              required
            />
          </label>
          <label className="mb-2 flex flex-col p-2">
            Text
            <input
              type="text"
              name="text"
              id="text"
              className="rounded-xl bg-slate-600 py-1 px-2"
              defaultValue={data.content.text}
              required
            />
          </label>
          <label className="mb-2 flex flex-col p-2">
            Image
            <input
              type="url"
              name="image"
              id="image"
              className="rounded-xl bg-slate-600 py-1 px-2"
              defaultValue={data.image}
            />
          </label>
          <button
            type="submit"
            className="mt-8 w-max rounded-full bg-slate-800 px-5 py-2 text-slate-400 hover:bg-slate-700 hover:text-slate-100"
          >
            Edit Post
          </button>
        </form>
      </Popup>
      <CommentList blogId={id} />
    </div>
  );
}
