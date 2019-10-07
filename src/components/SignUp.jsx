import '../style/signUp.css'
import React from 'react';
import Header from './Header';
import SubmitBtn from './SubmitBtn';
import SwitchBtn from './SwitchBtn';

const SignUp = () => {
    return (
        <div className="singnupCmpt">
            <Header value={"Sign Up"} />
            <form>
                <input 
                    type="email" 
                    required
                    placeholder='Enter your email' />
                <input 
                    type="password" 
                    required
                    placeholder='Enter your password' />
                <input 
                    type="password" 
                    required
                    placeholder='Confirm password' />
                <input 
                    type="text" 
                    required
                    placeholder='Enter Your Name' />

                <SubmitBtn value={"Sign Up"} />
                <SwitchBtn value={"Sign In"} />
            </form>

        </div>
    )
}

export default SignUp;