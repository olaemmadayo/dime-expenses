import React from "react";
import "./App.css";
import logo from './assets/Logo.svg'
import Design from './assets/design.svg'


const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <img src={logo} alt="logo" />
        <nav>
            <div>
             <a href="#" class="tab">Services</a>
             <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
            <div class="navbar">
             <a href="#" class="tab">Pricing</a>
            </div>
            <div class="navbar">
                <a href="#" class="tab">Benefts</a> 
            </div>
            <div class="navbar">
                <a href="#" class="tab">Help</a> 
            </div>
            <div class="navbar">
                <a href="#" class="tab">How its Works</a>
            </div>  
        </nav>
        <div class="ctan">
            <button class= "login">
                login 
             </button>
             <button className="signup">
                 Sign up 
             </button>
        </div>   
    </header>
    <section>
       <div className="text">
         <h2>Account for every dime all in one place.</h2>
         <p>
            The easy-to-use expense tracker  that keeps you in control 
            of your finances effortlessly.  
         </p> 
            <p>manage every dime like a pro</p>
            <div>
             <button className="sign-up">
             Create your Free account
             </button>
             <button className="login">
              see pricing
             </button>
            </div>  
       </div>
     <div className="image">
       <img src={Design} alt="design" />
     </div>
    </section>  
    </div>
     
  );
};

export default LandingPage;
