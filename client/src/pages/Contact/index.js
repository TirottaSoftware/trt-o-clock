import { } from '@heroicons/react/outline'
import omegaImage from '../../assets/omega-sm.png'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useState } from "react"
import './Contact.css'
import Sidebar from '../../components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

function Contact() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <Sidebar open={sidebarOpen} hideSidebar={() => setSidebarOpen(false)} />
            <div className='contact-section container'>
                <h1>Get Your Questions Answered</h1>
                <div className='contact-section-wrapper'>
                    <div className='contact-img-wrapper img-wrapper'>
                        <img src={omegaImage} alt='Omega Watch' />
                    </div>
                    <div className='contact-info-container'>
                        <div className='contact-info-row'>
                            <h2>Call Us</h2>
                            <h6>+612 8203 4538</h6>
                        </div>
                        <div className='contact-info-row'>
                            <h2>Email Us</h2>
                            <h6>info@trtoclock.com</h6>
                        </div>
                        <div className='contact-info-row'>
                            <h2>Follow Us</h2>
                            <div className='social-media-container'>

                                <div className='social-media-row'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                    <p>trtoclock</p>
                                </div>
                                <div className='social-media-row'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                    <p>trtoclock</p>
                                </div>
                                <div className='social-media-row'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                    <p>trtoclock</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact