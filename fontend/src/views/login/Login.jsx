import './login.css'


const Login = () => {
    return(
        <div className="login">
            <div className="loginBlock">

                <form action="" method="POST">

                    <h2 className='loginHead'>Sign In To Oily</h2>

                    <div className="login_with">
                        <button type='button'> Continue with google</button> 
                        <button type='button'> Continue with facebook </button> 
                    </div>

                    <div className="divider">
                        <span>-------------</span> <span> OR </span> <span>-------------</span>
                    </div>

                    <div className="login_">
                        <input type="text" name="username" id="username" placeholder='Username' required/> 
                        <input type="text" name="password" id="password" placeholder='Password' required/>
                    </div>
                    <a className='forget' href="http://">Forget Password?</a>

                    <div className="loginButtonBlock">
                        <button className='loginButton' type="submit">Login</button>
                    </div>

                    <div className="login_foot">
                        <p>Not a member yet? <a href="http://" target="_blank" rel="noopener noreferrer">Sign up</a></p>
                    </div>
                    
                </form>
            </div>

        </div>
    )
}

export default Login;