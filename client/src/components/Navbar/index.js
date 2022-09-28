import { Link } from 'react-router-dom';
import Burger from '../Burger';
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
                    <Link className='nav-link' to="/store">
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
                    <Link className='nav-link' to="/cart">
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