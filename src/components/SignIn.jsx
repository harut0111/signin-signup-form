import '../style/signIn.css';
import React, { useState }  from 'react';
import Header from './Header';
import SubmitBtn from './SubmitBtn';
import SwitchBtn from './SwitchBtn';
import { connect } from "react-redux";

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="signinCmpt">
            <Header value={'Sign In'} />
            <form>
                <label>
                    Email:
                    <input 
                        type='email' 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    Password:
                    <input 
                        type='password' 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </label>
                <SubmitBtn value={"Sign In"} />
                <p>Don't have account yet?</p>
                <SwitchBtn value={"Sign Up"} />
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        registre: state.registre,
    }
}

export default connect(mapStateToProps)(SignIn);