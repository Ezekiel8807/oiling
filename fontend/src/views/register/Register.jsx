import { Link } from 'react-router-dom';
import './register.css'


const Register = () => {
    return(
        <div className="register">
            <div className="loginBlock">

                <form action="" method="POST">

                    <h2 className='loginHead'>Join Us On Oily</h2>

                    <div className="login_with">
                        <button type='button'> Continue with google</button> 
                        <button type='button'> Continue with facebook </button> 
                    </div>

                    <div className="divider">
                        <span>-------------</span> <span> OR </span> <span>-------------</span>
                    </div>

                    <div className="login_">
                        <input type="text" name="username" id="username" placeholder='Username' required/> 
                        <input type="email" name="email" id="email" placeholder='Email' required/> 
                        <input type="password" name="password" id="password" placeholder='Password' required/>
                    </div>
                    {/* <a className='forget' href="http://">Forget Password?</a> */}

                    <div className="loginButtonBlock">
                        <button className='loginButton' type="submit">Register</button>
                    </div>

                    <div className="login_foot">
                        <p>Already a member? <Link to="/login" target="_self" rel="noopener noreferrer">Sign in</Link></p>
                    </div>
                    
                    
                </form>
            </div>
        </div>
    )
}

export default Register;