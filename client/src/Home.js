import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react'
import './globals.css'
import './Home.css'

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
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
    </div>
  );
}

export default Home;
