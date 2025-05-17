import HeaderBanner from './components/HeaderBanner.jsx';
import Nav from './components/Nav.jsx';
import Products from './components/Products.jsx';
import Home from './layouts/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/cart.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <HeaderBanner />
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<Products />}/>
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App