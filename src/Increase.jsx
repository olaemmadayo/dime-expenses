import './Increase.css' 
import LinecapImg from '../src/assets/Linecap.png';
import TickImg from '../src/assets/Tick.png';
import BalanceImg from '../src/assets/Balancestat.png';

const Increase = () => {
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
                     <img className='Linecap-img' src={LinecapImg} alt='LinecapImage'/>
                     <h4 style={{textAlign:'left'}}>Track Business Expenses until its Milisecond</h4>
                 </div>
                 <div className='success'>
                     <img className='Tick-img' src={TickImg} alt='TickImage'/>  
                     <p>Analyze your business cost easily with group transaction thorugh tagging feature.</p>
                 </div>
                 <div className='success'>
                     <img className='Tick-img' src={TickImg} alt='TickImage'/>
                     <p>Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.</p>
                  </div>
                 <div className='success'>
                     <img className='Tick-img' src={TickImg} alt='TickImage'/>
                     <p>Arrange your business expenses by date, name, etc.,  with just one click.</p> 
                 </div>
               </div>

               <div className='Statictis'>
                  <img className='Balancestat-img' src={BalanceImg} alt='BalancestatImage'/>
               </div>
           </div>

        </div>


    </div>
  )
}

export default Increase 