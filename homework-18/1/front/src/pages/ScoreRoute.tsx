import { Route } from "@tanstack/react-router";
import React from "react";
import rootRoute from "../Root";

const scoreRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/scoreboard",
component: ScoreRoute,
});

function ScoreRoute() {
  return <div className="flex items-center justify-center m-auto p-10 h-screen">Score Route</div>;
}
export default scoreRoute;
