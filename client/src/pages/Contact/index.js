import React from 'react'

function Contact() {
    return (
        <div className='contact-section container'>
            <h1>Get Your Questions Answered</h1>
            <div className='contact-img-wrapper'>
                <img src='' alt='' />
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
                    <div className='social-media-row'></div>
                    <div className='social-media-row'></div>
                    <div className='social-media-row'></div>
                </div>
            </div>
        </div>
    )
}

export default Contact