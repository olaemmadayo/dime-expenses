import Chart from './assets/Chart.svg'
import './Productivity.css'
import tag from './assets/Tags.svg'
import toggle from './assets/Toggle.svg'

const Productivity = () => {
    return(
  
      <div>
  
        <div className='Header-wrap'>
            <div className='Increase'>
               <p>INCREASE PRODUCTIVITY</p>
               <h2> Reduce Time in Doing Manual Work Managing Expenses</h2>
            </div>
  
            <div className='Hero-wrap'>
                 <div className='Header'>
                   <div className='Withdime'>
                       <img className='Linecap-img' src={toggle} alt='LinecapImage'/>
                       <h4 style={{textAlign:'left'}}>Taking too long to tidy up administrative files makes 
                       it unproductive</h4>
                   </div>
                   <div className='success'>
                       <img className='Tick-img' src={tag} alt='Tick'/>  
                       Complex, untidy recording process due to every administrative 
                       file in a different place and ambiguous spending.
                   </div>
                   <div className='success'>
                       <img className='Tick-img' src={tag} alt='Tick'/>Need more effort to pay manually one by one
                        invoice because there is no payment accommodation.
                    </div>
                   <div className='success'>
                       <img className='Tick-img' src={tag} alt='Tick'/>
                       Manual data arranging needs a long time because the different months/years are not in the same place.
                   </div>
                 </div>
  
                 <div className='Statictis'>
                    <img className='Balancestat-img' src={Chart} alt='BalancestatImage'/>
                 </div>
             </div>
  
          </div>
  
  
      </div>
    )
  }
  
  export default Productivity