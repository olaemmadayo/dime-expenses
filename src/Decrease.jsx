import './Decrease.css' 
import LinedimeImg from '../src/assets/Linedime.png';
import MarkImg from '../src/assets/Mark.png';
import StatschartImg from '../src/assets/Statschart.png';

const Decrease = () => {
  return(

    <div>

      <div className='Header-wrap'>
          <div className='Increase'>
             <p>INCREASE PRODUCTIVITY</p>
             <h2> Reduce Time in Doing Manual Work</h2>
             <h2>Managing Expenses</h2>
          </div>

          <div className='Hero-wrap'>
               <div className='Header'>
                 <div className='Withdime'>
                     <img className='Linedime-img' src={LinedimeImg} alt='LinedimeImage'/>
                     <h4 style={{textAlign:'left'}}>Taking too long to tidy up administrative files makes 
                     it unproductive</h4>
                 </div>
                 <div className='success'>
                     <img className='Mark-img' src={MarkImg} alt='MarkImage'/>  
                     <p>Complex, untidy recording process due to every administrative file in a different place and ambiguous spending.</p>
                 </div>
                 <div className='success'>
                     <img className='Mark-img' src={MarkImg} alt='MarkImage'/>
                     <p>Need more effort to pay manually one by one invoice because there is no payment accommodation.</p>
                  </div>
                 <div className='success'>
                     <img className='Mark-img' src={MarkImg} alt='MarkImage'/>
                     <p>Manual data arranging needs a long time because the different months/years are not in the same place.</p> 
                 </div>
               </div>

               <div className='Statictis'>
                  <img className='Statschart-img' src={StatschartImg} alt='StatschartImage'/>
               </div>
           </div>

        </div>


    </div>
  )
}

export default Decrease 