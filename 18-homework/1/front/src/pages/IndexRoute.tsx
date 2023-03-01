import { Route } from '@tanstack/react-router'
import React from 'react'
import rootRoute from '../Root'

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexRoute,
})

 function IndexRoute() {
  return (
    <div className="flex items-center justify-center m-auto p-10 h-screen">Home page</div>
  )
}

export default indexRoute