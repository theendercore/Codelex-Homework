import { Link, Outlet, RootRoute } from "@tanstack/react-router";
import { useState } from "react";

const rootRoute = new RootRoute({
  component: Root,
});

function Root() {
  return (
    <div className="Root">
      <div>
        <Link to="/">Home</Link>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}

export default rootRoute;
