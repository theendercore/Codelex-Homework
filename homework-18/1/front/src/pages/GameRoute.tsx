import { Route } from "@tanstack/react-router";
import React from "react";
import rootRoute from "../Root";

const gameRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/game",
  component: GameRoute,
});

function GameRoute() {
  return (
    <div className="GameRoute m-auto flex h-screen items-center justify-center p-10">
      <h2>The Game</h2>
        
    </div>
  );
}
export default gameRoute;
