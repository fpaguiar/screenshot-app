import App from './App'
import OverlayView from './views/OverlayView'
import Panel from './views/Panel'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/panel',
    element: <Panel />
  },
  {
    path: '/screenshot-overlay',
    element: <OverlayView />
  },
  {
    path: '/settings',
    element: <div>Settings</div>
  }
])
