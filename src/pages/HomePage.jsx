import React from 'react'
import App from '../App'
import ErrorBoundary from '../components/ErrorBoundary'

export const ssgOptions = {
  slug: 'index',
  routeUrl: '/',
  // Optional Head can be provided here
};

// Provide a context wrapper if your app needs providers during SSR
export const context = async (children) => {
  return children
}

export default function HomePage() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  )
}
