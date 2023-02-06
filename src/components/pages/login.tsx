import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Login ({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
	return (
		<div className="logform">
		<form>
		<div className="wrapper">
	        <h1 id="headline">Log in to connect</h1>
		        <div className="input-data">
		            <input className="form__input" type="text" id="email" autoComplete="off" placeholder=" " onChange={e => setUserName(e.target.value)} required/>
		            <label className="form__label" >Email</label>
		        </div>
		        <div className="input-data">
		            <input className="form__input" type="password" id="password" autoComplete="off" placeholder=" " onChange={e => setPassword(e.target.value)} required/>
		            <label className="form__label" >Password</label>
		        </div>
		        <button className="logbut" type="submit">Log in</button>
		        <div className="otheroption">
		            <img src="img/google.png" width="70" alt="" id="google"/>
		            <img src="img/facebook.png" width="70" alt="" id="facebook"/>
		        </div>
		        <p className="bottom__lines">
		            Don't have an account <a className="link__one" href="">register here</a>
		            <br />
		            By Logging in you accept our <a className="link__two" href="#YOUR_TERMS">terms of use</a>
		            <br />
		        </p>
    	</div>
    	</form>
    	</div>
	)
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}