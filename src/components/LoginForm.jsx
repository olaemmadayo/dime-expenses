import React from 'react'
import "../styles/LoginForm.css"
import HrHeader from './HrHeader'

export const LoginForm = () => {
  return (
    <div>
     
        <HrHeader/>
      
    <div className='login-page'>

        <div className="Login">
          <div class="form-group">
              <label for="name">Email</label>
              <input type="text" id="name" name="name" placeholder="input your email" required/>
          </div>
          <div class="form-group">
          <label for="password">Password</label>
          <input type="text and number" id="password" name="password" placeholder="input your password" minlength="4" maxlength="16" required/>
          </div>
          <button type="submit" class="login-btn">Login</button>
          <p>Forgot Password</p>

      </div>
    </div>
    </div>
  )
}
export default LoginForm