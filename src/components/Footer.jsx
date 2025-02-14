import logoDime from '../assets/images/Dime_logo2.png'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer-page'>

           <div class="about-product">
                    <div class="aboutinfo">  
                        <img src={logoDime} alt="logo" />              
                        <p>
                        Data visualisation, and <br /> expense management <br />
                        for your personal finances and businesses
                        </p>
                    </div>
                    <div class="aboutinfo">
                        <h2>Product</h2>
                        <ol>Digital Invoice</ol>
                        <ol>Analytics</ol>
                        <ol>Reimbursements</ol>
                        <ol>Vitual Assistant</ol>
                        <ol>Artificial Intelligence</ol>
                    </div>
                    <div class="aboutinfo">
                        <h2>Company</h2>
                        <ol> About Us</ol>
                        <ol>Newsletters</ol>
                        <ol>Our Partners</ol>
                        <ol>Career</ol>
                        <ol>Contact Us</ol>
                    </div>
                    <div class="aboutinfo">
                        <h2>Resources</h2>
                        <ol> Blog</ol>
                        <ol>Pricing</ol>
                        <ol>FAQ</ol>
                        <ol>Events</ol>
                        <ol>Ebook & Guide</ol>
                    </div>
                    <div class="aboutinfo">
                        <h2>Follow us</h2>
                        <ol>LinkedIn</ol>
                        <ol>Twitter</ol>
                        <ol>Instagram</ol>
                        <ol>Facebook</ol>
                        <ol>YouTube</ol>
                    </div>
                    
            </div>
            <footer>
                <p>Privacy policy</p>
            <p>Terms & Conditions</p>
            <p>Cookies policy</p>
          
            </footer>
            
        </div>

    );
}
export default Footer