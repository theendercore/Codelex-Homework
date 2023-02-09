import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Popup from "./components/Popup/Popup";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import AuthorDropdown from "./components/AuthorDropdown";
import { useMutation } from "@tanstack/react-query";
import { postNewPost } from "./api/apiCalls";

function App() {
  const [popupOpen, setPopupOpen] = useState(false);

  const mutation = useMutation<BlogPost, Error, Omit<BlogPost, "id">>({
    mutationFn: (newPost) => postNewPost(newPost),
    onError: (error) => console.log(error),
    onSuccess: () => {
      alert("Post Posted!");
    },
  });

  function handleAddNewPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    formData.forEach((value, key) => {
      console.log(key, value);
    });
    mutation.mutate({
      image: formData.get("image")!.toString().trim(),
      content: {
        title: formData.get("title")!.toString().trim(),
        excerpt: formData.get("excerpt")!.toString().trim(),
        text: formData.get("text")!.toString().trim(),
      },
      authorId: Number(formData.get("authorId")!.toString().trim()),
    });
    setPopupOpen(false);
  }

  return (
    <>
      <nav className="mb-5 bg-slate-500">
        <div className="container mx-auto p-3">
          <ul className="relative flex flex-row justify-evenly p-1">
            <li className="mx-6 my-4">
              <Link
                to="/"
                className="text-md rounded-xl px-6 py-4 hover:bg-slate-600 hover:shadow-inner"
              >
                Home
              </Link>
            </li>
            <li className="mx-6 my-4">
              <Link
                to="/posts"
                className="text-md rounded-xl px-6 py-4 hover:bg-slate-600 hover:shadow-inner"
              >
                Blog
              </Link>
            </li>
            <li>
              <button
                onClick={() => setPopupOpen(true)}
                className="text-md absolute top-1 right-0 rounded-xl bg-cyan-600 px-6 py-4 shadow-md hover:bg-cyan-800 hover:shadow-inner"
              >
                add Post
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <Popup open={popupOpen} onClose={() => setPopupOpen(false)}>
        <form
          onSubmit={handleAddNewPost}
          className="flex flex-col content-center items-center text-slate-200"
        >
          <label className="mb-2 flex flex-col p-2">
            Title{" "}
            <input
              type="text"
              name="title"
              id="title"
              className="rounded-xl bg-slate-600 py-1 px-2"
              required
            />
          </label>
          <label className="mb-2 flex flex-col p-2">
            Header{" "}
            <input
              type="text"
              name="excerpt"
              id="excerpt"
              className="rounded-xl bg-slate-600 py-1 px-2"
              required
            />
          </label>
          <label className="mb-2 flex flex-col p-2">
            Text{" "}
            <input
              type="text"
              name="text"
              id="text"
              className="rounded-xl bg-slate-600 py-1 px-2"
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
              defaultValue={"https://picsum.photos/id/234/500/350"}
            />
          </label>
          <label className="mb-2 flex flex-col p-2">
            Author
            <AuthorDropdown className="pb-2 text-slate-800" />
          </label>
          <button
            type="submit"
            className="mt-8 w-max rounded-full bg-slate-800 px-5 py-2 text-slate-400 hover:bg-slate-700 hover:text-slate-100"
          >
            Add Post
          </button>
        </form>
      </Popup>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
