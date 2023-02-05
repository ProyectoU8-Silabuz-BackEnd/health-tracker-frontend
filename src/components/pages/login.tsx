const Login = () => {
	return (
		<div className="logform">
		<form>
		<div className="wrapper">
	        <h1 id="headline">Log in to connect</h1>
		        <div className="input-data">
		            <input className="form__input" type="text" id="email" autoComplete="off" placeholder=" " required/>
		            <label className="form__label" for="email">Email</label>
		        </div>
		        <div className="input-data">
		            <input className="form__input" type="text" id="password" autoComplete="off" placeholder=" " required/>
		            <label className="form__label" for="password">Password</label>
		        </div>
		        <button className="logbut">Log in</button>
		        <div className="otheroption">
		            <img src="img/google.png" width="70" alt="" id="google"/>
		            <img src="img/facebook.png" width="70" alt="" id="facebook"/>
		        </div>
		        <p className="bottom__lines">
		            Don't have an account <a className="link__one" href="javascript:toggleform( )">register here</a>
		            <br />
		            By Logging in you accept our <a className="link__two" href="#YOUR_TERMS">terms of use</a>
		            <br />
		        </p>
    	</div>
    	</form>
    	</div>
	)
}

export default Login;