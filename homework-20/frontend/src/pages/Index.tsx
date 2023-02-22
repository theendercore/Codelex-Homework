import { Route } from "@tanstack/react-router";
import React from "react";
import AnimalDisplay from "../components/AnimalDisplay/AnimalDisplay";
import rootRoute from "../Root";

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexRoute,
});

function IndexRoute() {
  let val = null;
  return (
    <div className="m-auto flex flex-col items-center justify-center p-10">
      {val ? (
        <AnimalDisplay />
      ) : (
        <>
          <h2 className="my-5 text-3xl">No Animals Added Yet!</h2>
          <button className="my-5 rounded bg-slate-500 px-5 py-3 text-xl hover:bg-slate-900 ">
            Add animal
          </button>
        </>
      )}
    </div>
  );
}

export default indexRoute;
