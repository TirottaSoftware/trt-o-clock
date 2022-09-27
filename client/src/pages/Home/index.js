import '../../globals.css';
import './Home.css';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Featured from '../../components/Featured'
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';

import { useState } from 'react';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import casioLogo from '../../assets/casio-logo.png';
import dwLogo from '../../assets/daniel-wellington-logo.png';
import seikoLogo from '../../assets/seiko-logo.png';
import omegaLogo from '../../assets/omega-logo.png';
import { Link } from 'react-router-dom';


// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: `http://localhost:4000/graphql`
// })

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Sidebar open={sidebarOpen} hideSidebar={() => setSidebarOpen(false)} />
        <div className='hero'>
          <div className='hero-text'>
            <h1>EXPRESS YOURSELF</h1>
            <h1>WITH <span className='hero-bold'>PROFESSIONALISM</span></h1>
            {/* <p>Loved on Earth and beyond, the Speedmaster Moonwatch remains a true icon in the world of watchmaking. For its most recent update, the legendary chronograph has been inspired by its own historical design, while the Master Chronometer certification provides even more reliability and excellence.</p> */}
            {/* <label>$4,000.00</label> */}
            <br />
            <button className='btn-cta'>Discover</button>
          </div>
        </div>
        <section id="brands">
          <div className='brands-container'>
            <img src={casioLogo} alt='casio-logo' />
            <img src={dwLogo} alt='dw-logo' />
            <img src={seikoLogo} alt='seiko-logo' />
            <img src={omegaLogo} alt='omega-logo' />
          </div>
        </section>
        <section id="favourites">
          <div className='favourites-hero'>
            <Carousel />
          </div>
          <Link to='/store' className='btn-cta'>Browse Store</Link>
        </section>
        <section id="featured">
          <Featured />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;