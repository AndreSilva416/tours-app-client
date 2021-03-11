import React from 'react';
import './SignIn.css'

function SignIn(props){

    
    return (
        <form className="signin" onSubmit={props.onSignIn}>
            <div className="form-group inputform">
                <label htmlFor="InputEmail">Email address</label>
                <input type="email" className="form-control" id="InputEmail" name="email" />
            </div>
            <div className="form-group inputform">
                <label htmlFor="InputPassword">Password</label>
                <input name="password" type="password" className="form-control" id="InputPassword" />
            </div>
            { 
                props.error ? <h4>{props.error.errorMessage}</h4> : null
            }
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    )
}

export default SignIn