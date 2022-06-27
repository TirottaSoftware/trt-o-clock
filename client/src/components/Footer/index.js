import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-main'>
                <img className='logo' src={logo} alt={`TRT O'Clock Logo`} />
                <div className='footer-links'>
                    <li>Terms & Conditions</li>
                    <li>Sign Up</li>
                    <li>Contacts</li>
                    <li>My Purchases</li>
                    <li>Privacy Policy</li>
                    <li>My Profile</li>
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