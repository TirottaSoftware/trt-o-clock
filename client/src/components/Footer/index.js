import './Footer.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-main'>
                <div className="img-wrapper">
                    <img className='logo' src={logo} alt={`TRT O'Clock Logo`} />
                </div>
                <div className='footer-links'>
                    <li>
                        <Link className='nav-link' to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-link' to="/store">
                            Store
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-link' to="/contact">
                            Contact Us
                        </Link>
                    </li>
                </div>
            </div>
            <div className='newsletter'>
                <p>Subscribe to our Newsletter to receive a 10% discount on your next purchase</p>
                <input type='text' />
                <input type='submit' value='Subscribe' />
            </div>
        </div>
    )
}

export default Footer