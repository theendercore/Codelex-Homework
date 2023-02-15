import { ReactRouter, RouterProvider } from "@tanstack/react-router";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import rootRoute from "./Root";
import gameRoute from "./pages/GameRoute";
import scoreRoute from './pages/ScoreRoute';
import indexRoute from "./pages/IndexRoute";
import errorRoute from './pages/ErrorRoute';


const routeTree = rootRoute.addChildren([indexRoute, gameRoute, scoreRoute, errorRoute])

const router = new ReactRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
