import { Link, Outlet, RootRoute } from "@tanstack/react-router";
import { useState } from "react";

const rootRoute = new RootRoute({
  component: Root,
});

function Root() {
  return (
    <div className="Root bg-slate-900 text-slate-400">
      <div  className="flex items-center justify-center m-auto p-10 gap-10 shadow-2xl">
        <Link to="/">Home</Link>
        <Link to="/game">Game</Link>
        <Link to="/scoreboard">Scores</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default rootRoute;
