import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import About from "./Pages/About";
import Character from "./Pages/Character";
import NotFound from "./Pages/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="container mx-auto my-5">
        <ul className="flex flex-row justify-evenly rounded-full bg-slate-700 p-1">
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
              to="/characters"
              className="text-md rounded-xl px-6 py-4 hover:bg-slate-600 hover:shadow-inner"
            >
              Characters
            </Link>
          </li>
          <li className="mx-6 my-4">
            <Link
              to="/about"
              className="text-md rounded-xl px-6 py-4 hover:bg-slate-600 hover:shadow-inner"
            >
              About Us
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
