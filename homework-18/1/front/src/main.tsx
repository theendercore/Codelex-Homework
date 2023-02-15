import { ReactRouter, RouterProvider } from "@tanstack/react-router";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import indexRoute from "./pages/IndexRout";
import rootRoute from "./Root";


const routeTree = rootRoute.addChildren([indexRoute])

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
