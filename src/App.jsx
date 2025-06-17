import HeaderBanner from './components/HeaderBanner.jsx';
import Nav from './components/Nav.jsx';
import Products from './components/Products.jsx';
import ProductsDetail from './components/ProductsDetail.jsx';
import Home from './layouts/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Admin from './components/Admin.jsx';
import Login from './components/Login.jsx';
import { Toaster } from 'sonner';

function App() {
  return (
  <Router>
    <div className='grid min-h-dvh grid-rows-[auto_auto_1fr_auto]'>
      <HeaderBanner />
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/products' element={<Products />}/>
        <Route path="/products/:id" element={<ProductsDetail />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/admin' element={<Admin/>} />
      </Routes>
      <Footer />
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
  </Router>
  );
}

export default App