import React from 'react';
import './SignUp.css'

function SignUp(props){

    return (
        <form className="signup" onSubmit={props.onSignUp}>
            <div className="form-group inputform">
                <label htmlFor="InputUsername">Username</label>
                <input type="text" className="form-control" id="InputUsername" name="username" />
            </div>
            <div className="form-group inputform">
                <label htmlFor="InputEmail">Email address</label>
                <input type="email" className="form-control" id="InputEmail" name="email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group inputform">
                <label htmlFor="InputPassword">Password</label>
                <input name="password" type="password" className="form-control" id="InputPassword" />
            </div>
            {
                props.error ? <h4>{props.error.errorMessage}</h4> : null
            }
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default SignUp