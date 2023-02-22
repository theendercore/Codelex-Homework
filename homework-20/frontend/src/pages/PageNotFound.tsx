import { Route } from "@tanstack/react-router";
import React from "react";
import rootRoute from "../Root";

const pageNotFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "$",
  component: PageNotFoundRoute,
});

function PageNotFoundRoute() {
  return (
    <div className="m-auto flex flex-col items-center justify-center p-10">
      <h2 className="mt-10 text-4xl font-bold">404 Page Found</h2>
    </div>
  );
}

export default pageNotFoundRoute;
