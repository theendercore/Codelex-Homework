import { Router, RouterProvider } from '@tanstack/react-router';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import indexRoute from './pages/Index';
import rootRoute from './Root';

const routeTree = rootRoute.addChildren([indexRoute])

const router = new Router({ routeTree })

declare module '@tanstack/router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
