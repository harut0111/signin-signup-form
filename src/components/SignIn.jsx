import '../style/SignIn.css';
import React from 'react';
import Header from './Header';
import SubmitBtn from './SubmitBtn';
import SwitchBtn from './SwitchBtn';

export default function SignIn(props) {

    const handleOnSignUpClick = (e) => {
        
    } 

    return(
        <div className="signinCmpt">
            <Header value={'Sign Up'} />
            <form>
                <label>
                    Email:
                    <input 
                        type='email' 
                        required />
                    Password:
                    <input 
                        type='text' 
                        required />
                </label>
                <SubmitBtn value={"Sign In"} />
                <p>Don't have account yet?</p>
                <SwitchBtn value={"Sign Up"} />
            </form>
        </div>
    )
}