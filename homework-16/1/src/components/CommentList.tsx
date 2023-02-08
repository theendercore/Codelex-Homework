import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getComments, postComment } from "../api/apiCalls";
import AuthorDropdown from "./AuthorDropdown";
import Comment from "./Comment";
import Popup from "./Popup/Popup";

export default function CommentList({ commentsId }: { commentsId: number }) {
  const [popup, setPopup] = useState(false);
  const { isLoading, isError, error, data } = useQuery<BlogComment[], Error>({
    queryKey: ["comments", commentsId],
    queryFn: ({ signal }) => getComments(commentsId, signal),
  });

  const mutation = useMutation<BlogComment, Error, Omit<BlogComment, "id">>({
    mutationFn: (newComment) => postComment(commentsId, newComment),
    onSuccess: () => {
      alert("Comment Posted!");
    },
  });
  if (isLoading || mutation.isLoading)
    return <h3 className="text-center text-6xl">Loading...</h3>;

  if (isError || mutation.isError)
    return (
      <h3 className="text-center text-6xl">Error {JSON.stringify(error)}</h3>
    );

  if (!data || data.length === 0)
    return <h3 className="text-center text-xl">No comments...</h3>;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    if (formData.get("text") === null || formData.get("text") === "") {
      alert("Please write a comment!");
      return;
    }
    mutation.mutate({
      text: formData.get("text")?.toString().trim() || "",
      authorId: Number(formData.get("authorId")?.toString()),
    });
  }

  return (
    <div className="CommentList comments flex flex-col items-center">
      {data.map((c) => (
        <Comment key={crypto.randomUUID()} comment={c} />
      ))}
      <div className="m-auto flex w-max items-center justify-center  ">
        <button
          onClick={() => setPopup(true)}
          className="rounded bg-slate-700 p-5"
        >
          Add Comment
        </button>
        <Popup open={popup} onClose={() => setPopup(false)}>
          <form onSubmit={handleSubmit}>
            <label className="mb-2 flex flex-col p-2">
              Comment
              <input
                type="text"
                name="text"
                id="text"
                className="rounded-xl bg-slate-600 py-1 px-2"
              />
            </label>
            <label className="mb-2 flex flex-col p-2">
              Author
              <AuthorDropdown className="rounded-xl bg-slate-600 py-2 px-2" />
            </label>
            <button type="submit">Post Comment</button>
          </form>
        </Popup>
      </div>
    </div>
  );
}
