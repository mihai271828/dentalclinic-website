import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import PageLayout, { loader,MainErrorBoundary } from './page-layout.jsx'
import Home from './Home'
import Servicii from './Servicii'
import AboutUs from './AboutUs'
import Contact from './Contact'
import NotFound from './NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      Component={PageLayout}
      loader={loader}
      MainErrorBoundary={MainErrorBoundary}
    >
      <Route index Component={Home} />
      <Route path="despre-noi" Component={AboutUs} />
      <Route path="servicii" Component={Servicii} />
      <Route path="contact" Component={Contact} />
      <Route path="*" Component={NotFound} />
    </Route>
  )
)

export default function Pages() {
  return <RouterProvider router={router} />
}
