import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './utilities/routes.jsx'
import { ShoppingCartProvider } from './context/ShoppingCartContext.jsx'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShoppingCartProvider>
      <RouterProvider router={router}/>
    </ShoppingCartProvider>
  </StrictMode>,
)
