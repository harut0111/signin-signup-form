import React, { useState } from 'react';
import Header from './Header';
import SubmitBtn from './SubmitBtn';
import SwitchBtn from './SwitchBtn';
import { connect } from "react-redux";
import { useTranslation } from 'react-i18next';
import { signUp } from '../redux/actions/index';


const SignUp = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] =  useState('');
    const [name, setName] = useState('');
    const [errorVis, setErrorVis] = useState(false);

    const { t } = useTranslation();

    const signupSubmitHandler = (e) => {
        e.preventDefault();
        if(password !== confPassword) {
            setErrorVis(true);
        } else {
            setErrorVis(false);
            props.signUp();
        }
    }

    return (
        <div className="singnupCmpt">
            <Header value={t("Sign Up")} />
            <fieldset disabled={props.disableForm} style={{border: 'none'}}>
                <form onSubmit={signupSubmitHandler}>
                    <input 
                        type="email" 
                        placeholder={t('Enter your email')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus
                        required />
                    <input 
                        type="password" 
                        placeholder={t('Enter your password')}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        pattern="(.+?).{5,}" 
                        title="Must contain at least 6 or more characters" 
                        required />
                    <input 
                        type="password" 
                        placeholder={t('Confirm password')}
                        value={confPassword}
                        onChange={(e) => setConfPassword(e.target.value)}
                        pattern="(.+?).{5,}" 
                        title="Must contain at least 6 or more characters" 
                        required />
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t('Enter Your Name')}
                        required />

                    <p style={{color: 'red', margin: '0px', display: errorVis ? 'block': 'none'}}>Passwords Don't Match</p>
                    
                    <SubmitBtn value={t("Sign Up")} />
                    <p>{t("Already Registered?")}</p>
                    <SwitchBtn value={t("Sign In")} />
                </form>
            </fieldset>
        </div>
    )
}

const stateToProps = (state) => {
    return {
        disableForm: state.disableForm
    }
}

export default connect(stateToProps, { signUp })(SignUp);