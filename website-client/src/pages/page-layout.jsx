// src/page-layout.jsx
import React from 'react'
import { Outlet, useRouteError, isRouteErrorResponse } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

/**
 * Optional loader for data you want on every page
 */
export async function loader() {
  // e.g. fetch navigation/menu items, user session, etc.
  // return fetch('/api/common').then(res => res.json())
  return null
}

/**
 * Catches render/load errors for _all_ child routes
 */
export function MainErrorBoundary() {
  const error = useRouteError()

  // you can distinguish thrown objects vs. 404s, etc.
  if (isRouteErrorResponse(error)) {
    return (
      <div style={{ padding: '2rem' }}>
        <h1>Oops — {error.status} {error.statusText}</h1>
        <p>{error.data || 'Something went wrong.'}</p>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Something really bad happened!</h1>
      <pre>{error?.message || String(error)}</pre>
    </div>
  )
}


export default function PageLayout() {
  return (
    <>
      <Header />

      <main style={{ minHeight: '70vh', padding: '1rem' }}>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
