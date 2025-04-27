import HeaderBanner from '../components/HeaderBanner.jsx';
import Header from '../components/Header.jsx';
import Nav from '../components/Nav.jsx';
import Main from '../components/Main.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
    return (
      <div className='bg-[#f6ecd9]'>
        <HeaderBanner />
        <Nav />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }

  export default Home