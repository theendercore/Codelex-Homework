import { Route } from "@tanstack/react-router";
import React from "react";
import rootRoute from "../Root";

const gameRout = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: GameRout,
});

function GameRout() {
  return <div>GameRout</div>;
}
export default gameRout;
