import React from 'react'
import dimeLogo from '../assets/Dime_logo 2.png'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer-page'>
        <div className="footer-rap">
            <div className='footer-dime'>
                <img  className="footer-dime-img" src={dimeLogo} alt="logo" />
                <p>
                    Data visualisation, and <br />
                    expense management <br />
                    for your personal finances and businesses
                </p>
            </div>
            <div className='footer-product'>
                <h4>Product</h4>
                <p>Digital Invoice</p>
                <p>Analytics</p>
                <p>Reimbursements</p>
                <p>Virtual Assistant</p>
                <p>Artificial Intelligence</p>
            </div>
            <div className='footer-company'>
                <h4>Company</h4>
                <p>About Us</p>
                <p>Newsletters</p>
                <p>Our Partners</p>
                <p>Career</p>
                <p>Contact Us</p>
            </div>
            <div className='footer-resources'>
                <h4>Resources</h4>
                <p>Blog</p>
                <p>Pricing</p>
                <p>FAQ</p>
                <p>Events</p>
                <p>Ebook & Guide</p>
            </div>
            <div className='footer-follow-us'>
                <h4>Follow Us</h4>
                <p>LinkedIn</p>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>YouTube</p>
            </div>
        </div>
        <hr />
        <div className="footer-terms-condition">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Cookie Policy</p>
        </div>
    </div>
  )
}

export default Footer