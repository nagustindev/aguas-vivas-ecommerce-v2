import HeaderBanner from './components/HeaderBanner.jsx';
import Nav from './components/Nav.jsx';
import Products from './components/Products.jsx';
import ProductsDetail from './components/ProductsDetail.jsx';
import Home from './layouts/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/cart.jsx';
import Footer from './components/Footer.jsx';
import Admin from './components/Admin.jsx';
import { useState } from 'react';
import Login from './components/Login.jsx';

function App() {
  const [usuarioLogeado, setUsuarioLogeado] = useState(false)
  const [adminLogeado, setAdminLogeado] = useState(false)

  function manejarAdmin() {
    setAdminLogeado(!adminLogeado)
  }

  function manejarUser(){
    setUsuarioLogeado(!usuarioLogeado)
  }
  
  return (
    <CartProvider>
      <Router>
        <div>
          <HeaderBanner />
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login user={usuarioLogeado} admin={adminLogeado} setLogeadoAdmin={manejarAdmin} setLogeadoUser={manejarUser}/>}/>
            <Route path='/products' element={<Products />}/>
            <Route path="/products/:id" element={<ProductsDetail />} />
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/admin' element={adminLogeado ? <Admin/> : <Navigate to={"/login"} replace/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App