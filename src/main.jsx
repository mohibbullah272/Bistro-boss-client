import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Rutes/router.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HelmetProvider>
  <AuthProvider>
  <RouterProvider router={router}></RouterProvider>
  <ToastContainer />
  </AuthProvider>
  </HelmetProvider>
  </StrictMode>,
)
