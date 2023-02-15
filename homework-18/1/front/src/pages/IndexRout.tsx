import { Route } from '@tanstack/react-router'
import React from 'react'
import rootRoute from '../Root'

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexRout,
})

 function IndexRout() {
  return (
    <div>IndexRout</div>
  )
}

export default indexRoute