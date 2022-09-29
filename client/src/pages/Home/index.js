import '../../globals.css';
import './Home.css';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Featured from '../../components/Featured'
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';

import { useState } from 'react';

import casioLogo from '../../assets/casio-logo.png';
import dwLogo from '../../assets/daniel-wellington-logo.png';
import seikoLogo from '../../assets/seiko-logo.png';
import omegaLogo from '../../assets/omega-logo.png';
import { Link } from 'react-router-dom';

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
            <br />
            <Link to='/product/5'>
              <button className='btn-cta'>Discover</button>
            </Link>
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
