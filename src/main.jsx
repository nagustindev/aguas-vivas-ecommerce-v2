import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/input.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { CartProvider } from './context/cart.jsx'
import { ProductosProvider } from './context/ProductosContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <Router>
      <ProductosProvider>
        <AuthProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AuthProvider>
      </ProductosProvider>
    </Router>
  </StrictMode>,
)
