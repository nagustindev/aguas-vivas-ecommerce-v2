import Header from '../components/Header.jsx';
import Cart from '../components/Cart.jsx';
import Main from '../components/Main.jsx';
import Footer from '../components/Footer.jsx';
import Products from '../components/Products.jsx';
import { CartProvider } from '../context/cart.jsx';

function Home() {
    return (
      <CartProvider>
            <Header />
            <Cart />
            <Main />
            <Products />
            <Footer />
      </CartProvider>
    );
  }

  export default Home