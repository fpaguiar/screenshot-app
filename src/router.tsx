import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Panel from './views/Panel'

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
    element: <div>Screenshot Overlay</div>
  },
  {
    path: '/settings',
    element: <div>Settings</div>
  }
])
