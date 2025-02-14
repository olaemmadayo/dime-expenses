import React from 'react'
import '../styles/testimonial.css'
import Card from '../Card'
import princess from '../assets/princess.png'
import jeff from '../assets/jeff.png'
import larry from '../assets/larry.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'







const Testimonial = () => {
  return (
    <div className='Testimonial--page'>
      <div className="header--wrap">
        <h4>WHAT THEY SAY</h4>
        <h2>Our User Kind Words</h2>
        <p>
        Here are some testimonials from our user after using Dime to <span className='content--break'>manage their business  expenses.</span>
        </p>
      </div>
      <div className="card--wrap">
        <Card
          title="It’s just incredible!"
          content="It's been just one month since I started using Spend.In to manage my business expenses, and the results are amazing! My business finances are now more organised than ever—thank you, Dime team!"
          
          image={princess}
          name="Princess Catherine"
          status="  Princess of Wales, England"

          />
          <Card
          title="Satisfied User Here!"
          content="Never thought that with Dime, managing my business expenses is so easy! I have Been using this platform for 1 year, 7 months and still counting. I've got sufficient effeciency. —thank you, Dime team!"
          image={larry}
          name="Larry Page"
          status="  Google Cofounder  & CEO"

          />
          <Card
          title="It’s just incredible!"
          content="It's been just one month since I started using Spend.In to manage my business expenses, and the results are amazing! My business finances are now more organised than ever—thank you, Dime team!"
          image={jeff}
          name="Princess Catherine"
          status="  Founder & Ex CEO  Amazon, Blue Origin"

          />
        </div>
      
        <div className='bottom--nav'>

          <div className='arrow-right'>
            <FaArrowLeft className='icon'/>
          </div>
          <div className='arrow--left'>
            <FaArrowRight className='icon--left'/>
          </div>

        </div>

      
    </div>
  )
}

export default Testimonial