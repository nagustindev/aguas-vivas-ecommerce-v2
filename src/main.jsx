import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/input.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { CartProvider } from './context/cart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
