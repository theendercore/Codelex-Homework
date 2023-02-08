import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import Posts from "./pages/Posts";

function App() {
  return (
    <>
      <nav className="mb-5 bg-slate-500">
        <div className="container mx-auto p-3">
          <ul className="flex flex-row justify-evenly p-1 relative">
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
                onClick={() => alert("aaa")}
                className="text-md absolute top-1 right-0 rounded-xl bg-cyan-600 px-6 py-4 shadow-md hover:bg-cyan-800 hover:shadow-inner"
              >
                add Post
              </button>
            </li>
          </ul>
        </div>
      </nav>
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
