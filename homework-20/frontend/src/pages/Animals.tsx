import { Route } from "@tanstack/react-router";
import React from "react";
import Counter from "../components/Counter";
import rootRoute from "../Root";

const animalsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/animals",
  component: AnimalsRoute,
});

function AnimalsRoute() {
  return (
    <div className="m-auto flex items-center justify-center p-10">
     <Counter /> 
    </div>
  );
}

export default animalsRoute;
