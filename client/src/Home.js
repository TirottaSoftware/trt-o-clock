import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import { useState } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import casioLogo from './assets/casio-logo.png'
import dwLogo from './assets/daniel-wellington-logo.png'
import seikoLogo from './assets/seiko-logo.png'
import omegaLogo from './assets/omega-logo.png'

import './globals.css'
import './Home.css'
import ProductCarousel from './components/ProductCarousel';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `http://localhost:4000/graphql`
})

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ApolloProvider client={client}>
      <div>
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Sidebar open={sidebarOpen} hideSidebar={() => setSidebarOpen(false)} />
        <div className='hero'>
          <div className='hero-text'>
            <h1>EXPRESS YOURSELF WITH PROFESSIONALISM </h1>
            <p>Loved on Earth and beyond, the Speedmaster Moonwatch remains a true icon in the world of watchmaking. For its most recent update, the legendary chronograph has been inspired by its own historical design, while the Master Chronometer certification provides even more reliability and excellence.</p>
            <label>$4,000.00</label>
            <br />
            <button className='btn-cta'>Buy Now</button>
          </div>
        </div>
        <section id="brands">
          <h1 className='section-title'>Our Brands</h1>
          <div className='brands-container'>
            <img src={casioLogo} alt='casio-logo' />
            <img src={dwLogo} alt='dw-logo' />
            <img src={seikoLogo} alt='seiko-logo' />
            <img src={omegaLogo} alt='omega-logo' />
          </div>
        </section>
        <section id="favourites">
          <h1 className='section-title'>All-Time Favourites</h1>
          <div className='favourites-hero'>
            <ProductCarousel />
          </div>
          <button className='btn-cta'>Browse Store</button>
        </section>
      </div>
    </ApolloProvider>
  );
}

export default Home;
