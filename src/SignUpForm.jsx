import "./SignUpForm.css"


function SignUpForm() {
    return (
<div>
<div class="signup-container">
        <h1>Sign Up</h1>
        <form action="/submit-signup" method="POST"/>
            <div class="form-group">
                <label for="name">First Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your First name " required/>
            </div>
            <div class="form-group">
                <label for="name">Last Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your last name" required/>
            </div>
            <div class="form-group">
                <label for="gender">Gender</label>
                <select id="gender" name="gender" required>
                    <option value="" disabled selected>Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="nonbinary">Non-Binary</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="number" id="age" name="age" placeholder="Enter your age" min="1" required/>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="text and number" id="password" name="password" placeholder="Create a password" minlength="4" maxlength="16" required/>
            </div>
            <div class="form-group">
                <label for="confirm-password">Confirm Password</label>
                <input type="text and number" id="confirm-password" name="confirm-password" placeholder="Confirm your password" minlength="4" maxlength="16" required/>
            </div>
            <p>byclicking the sign up button, you agree to our <br/>
                <input type="checkbox"/>
                <a href="#">terms and condition</a> and <a href="#">policy privacy</a>
                </p>
            <button type="submit" class="signup-button">Sign Up</button>
        {/* </form> */}
        <p>Already have an account? <a href="/login">Log in</a></p>
    </div>
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
  );
}


export default SignUpForm
