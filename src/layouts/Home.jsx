import HeaderBanner from '../components/HeaderBanner.jsx';
import Header from '../components/Header.jsx';
import Nav from '../components/Nav.jsx';
import Cart from '../components/Cart.jsx';
import Main from '../components/Main.jsx';
import Footer from '../components/Footer.jsx';
import Products from '../components/Products.jsx';
import { CartProvider } from '../context/cart.jsx';

const productos = [
  { nombre: 'Aquamarina Coral', insignia: 'All Round', imagen: '/public/images/2.png' },
  { nombre: 'Duotone Jaime SLS', insignia: 'Perfomance Freestyle', imagen: '/public/images/6.png' },
  { nombre: 'Duotone Grip 3 D/Lab', insignia: 'Wind', imagen: '/public/images/5.png' },
  { nombre: 'Uva Carrasco X', insignia: 'Shortboard', imagen: '/public/images/32.png' },
];


function Home() {
    return (
      <CartProvider>
        <div className='bg-[#f6ecd9]'>
            <HeaderBanner />
            <Nav />
            <Header />
            <Cart />
            <Main />
            <Products />
            <Footer />
        </div>
      </CartProvider>
    );
  }

  export default Home