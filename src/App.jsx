import HeaderBanner from './components/HeaderBanner.jsx';
import Nav from './components/Nav.jsx';
import Products from './components/Products.jsx';
import Home from './layouts/Home.jsx';
import About from './components/About.jsx';
import Contacto from './components/Contacto.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/cart.jsx';
import Footer from './components/Footer.jsx';

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
            <Route path='/about' element={<About />}/>
            <Route path='/contacto' element={<Contacto />}/>
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App