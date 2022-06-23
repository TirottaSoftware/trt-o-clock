import React from 'react'
import { Link } from 'react-router-dom';
import Burger from '../Burger/Burger';
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className='navbar'>
            <div className='nav-left'>
                <li>
                    <Link className='nav-link' to="/home">
                        <img className='logo' src={logo} alt='logo' />
                    </Link>
                </li>
                <li>
                    <Link className='nav-link' to="/home">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link className='nav-link' to="/home">
                        Contact
                    </Link>
                </li>
            </div>
            <div className='nav-right'>
                <li>
                    <Link className='nav-link' to="/home">
                        Cart
                    </Link>
                </li>
                <li>
                    <Burger onClick={toggleSidebar} />
                </li>
            </div>
        </nav>
    )
}

export default Navbar