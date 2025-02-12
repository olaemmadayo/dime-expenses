import logo from './assets/Logo.svg'
import money from './assets/money.svg'
import './IncomeDash.css'
function IncomeDash() {
    return (
        <div className='dash'>
            <div className='design'>
            <img src={logo} alt="logo" /> 

            </div>
            <div>
              <div class="form-group">
                <p className='text'>Set Income</p>
                <input type="number" id="num" name="number" placeholder="Amount" required/>
             </div>
             <button>Add Income</button>
             <div class="form-group">
             <p className='text'>Add Expenses</p>
                <select id="expenses" name="expenses" required>
                    <option value="food">Food</option>
                    <option value="t.fare">Transportation</option>
                    <option value="clothes">clothes</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
             </div>
             <div class="form-group">
                <input type=" number" id="amount" name="amount" placeholder="Enter Amount" required/>
            </div>
                <button>Add Expense</button>
            </div>
            <div> <img src={money} alt="money" /> </div>

        </div>

    )
}
export default IncomeDash 