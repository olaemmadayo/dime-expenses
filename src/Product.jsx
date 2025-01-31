import './Product.css'
import moneychatImg from '../src/assets/Moneychat.png';
import expensechatImg from '../src/assets/Expensechat.png';


function Product () {

    return(
        <div>
            <div className='Head-wrap'>
                <div className='Head'>
                    <div className='Heading'>
                        <p style={{color:'#757575'}}>WHY USE DIME ?</p>
                        <h4>Easy, Simple,
                            Affordable</h4>
                    </div>
                    <div className='Headline'>
                        <p>Our platform helps you in managing your personal or business expenses. These are some of the reasons why you should use our platform in managing business finances.</p>
                    </div>
                </div>


                <div className='chart-head'>
                  <div className='chart'>
                    <img className='chart-img' src={moneychatImg} alt='ChartImage'/> 
                  </div> 
                  <div className='chart'>
                    <img className='expense-img' src={expensechatImg} alt='ExpenseImage'/>
                  </div>
                  <div className='chart'></div>  
                </div>

                <div className='Data-tracker'>
                    <div className='Real-time'>
                        <h3>Real-time tracking and tracker</h3>
                        <h3 className='fun'>history</h3>
                        <p>Stay on top of your finances with real-time expenses </p>
                        <p>tracking, giving you instant on where your </p>
                        <p>money goes. Effortlessly review past spending </p>
                        <p>patterns with detailed history renditions to make </p>
                        <p>smarter financial decisions. with Dime, you'll never lose</p>
                        <p>track of a single dime! </p>
                    </div>
                    <div className='Data'>
                        <h3>Data Visualization</h3>
                        <p>Transform numbers into insights with beautiful data </p>
                        <p>visualizations. Instantly spot trends and make smarter </p>
                        <p>financial decisions-at a glance! </p>
                    </div>
                    <div className='Line'>
                        <div className='Line-one'></div>
                        <div className='Line-two'></div>
                        <div className='Line-two'></div>
                        <div className='Line-three'></div>
                    </div>
                </div>
            </div>

        </div>



    );
}

export default Product 