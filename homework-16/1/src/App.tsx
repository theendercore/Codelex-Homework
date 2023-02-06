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
      <nav className="bg-slate-500 mb-5">
        <div className="container mx-auto p-3">
          <ul className="flex flex-row justify-evenly p-1">
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
