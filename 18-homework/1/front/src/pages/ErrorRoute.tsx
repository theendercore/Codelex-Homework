import { Route } from "@tanstack/react-router";
import React from "react";
import rootRoute from "../Root";

const errorRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "*",
  component: ErrorRoute,
});

function ErrorRoute() {
  return <div className="flex items-center justify-center m-auto p-10 h-screen">Error 404</div>;
}
export default errorRoute;
