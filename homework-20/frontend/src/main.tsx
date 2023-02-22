import { Router, RouterProvider } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import indexRoute from "./pages/Index";
import rootRoute from "./Root";
import { Provider } from 'react-redux'
import { store } from "./app/store";
import pageNotFoundRoute from "./pages/PageNotFound";

const routeTree = rootRoute.addChildren([indexRoute, pageNotFoundRoute]);

const router = new Router({ routeTree });

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
