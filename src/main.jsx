import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Styles
import './index.css'

// Routes
import { Routes } from './routes'

// Contexts
import { ShoppingCartProvider } from './contexts'

// Components
import Navbar from './components/navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </ShoppingCartProvider>
  </React.StrictMode>,
)
