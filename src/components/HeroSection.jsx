import React from 'react'
import '../styles/HeroSection.css'
import HrHeader from './HrHeader'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import heroImage from '../assets/hero-image.png'
import HowItWorks from '../HowItWorks'
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import PricingForm from '../components/PricingForm'





const HeroSection = () => {
  return (
    <div className='Herosection'>
         <Router>
      <HrHeader />
      <Routes>
        <Route path="/how-it-works" element={<HowItWorks />} />

        <Route path="/pricing" element={<PricingForm/>}/>
        {/* <Route path="/benefit" element={<Testimonial/>}/>
        <Route path="/help" element={<SuccessStory/>}/> */}

        <Route path="/login" element={<LoginForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
      </Routes>
    </Router>

      <div className="hero--content--wrap">
        <div className='hero--content'>
          <h1>
          Account for every dime
          <span className='hero--content--break'>
              all in one place
          </span>
          </h1>
          <h4>
          The easy-to-use expense tracker  that keeps you in control <br />
          of your finances effortlessly.
          </h4>
          <h4>
            Manage every dime like a Pro!
          </h4>
          <hr />
        </div>
        <div className='hero--image'>
          <img src={heroImage} alt="" />
        </div>
      </div>
      <div className="hero--button">
        <button className='free-account'>Create a Free Account</button>
        <button className='see-pricing'>See Pricing</button>
      </div>
    </div>
  )
}

export default HeroSection