
import React from 'react';
import '../styles/HeroSection.css'
import HrHeader from './HrHeader';
import heroImage from '../assets/hero-image.png'
import Footer from '../components/Footer';

const HeroSection = () => {
  return (
    <div className='Herosection'>
      <HrHeader />
      <div className="hero--content--wrap">
        <div className='hero--content'>
          <h1> Account for every dime <span className='hero--content--break'> all in one place </span> </h1>
          <h4> The easy-to-use expense tracker that keeps you in control <br /> of your finances effortlessly. </h4>
          <h4> Manage every dime like a Pro! </h4>
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
      <Footer/>
    </div>
  );
};

export default HeroSection;
