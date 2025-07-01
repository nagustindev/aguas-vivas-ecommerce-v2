import HeaderBanner from './components/HeaderBanner.jsx';
import Nav from './components/Nav.jsx';
import Products from './components/Products.jsx';
import ProductsDetail from './components/ProductsDetail.jsx';
import Home from './layouts/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import ProductsForm from './components/admin/ProductsForm.jsx';
import EditProductsForm from './components/admin/EditProductsForm.jsx';
import { Toaster } from 'sonner';
import { useEffect } from 'react';
import { useAuthContext } from './context/AuthContext';


function App() {
  const { verificacionLog } = useAuthContext();
  const location = useLocation();

  useEffect(() => {
    verificacionLog()
  }, [])

    const esLogin = location.pathname === "/login";
  return (
    <>
      <div className='flex flex-col min-h-dvh'>
        {!esLogin && <HeaderBanner />}
        {!esLogin && <Nav />}
        <main className="flex-1">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/products' element={<Products />} />
            <Route path="/products/:id" element={<ProductsDetail />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/agregarProductos' element={<ProductsForm />} />
            <Route path="/editarProducto/:id" element={<EditProductsForm />} />
          </Routes>
        </main>
         {!esLogin && <Footer />}
      </div>
      <Toaster
        toastOptions={{
          unstyled: true,
          classNames: {
            toast: 'bg-primary border rounded-xl flex p-2',
            title: 'text-m font-normal text-black',
          },
        }}
        position="bottom-right"
      />
    </>
  );
}

export default App