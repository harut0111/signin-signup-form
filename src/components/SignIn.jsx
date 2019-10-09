import React, { useState }  from 'react';
import Header from './Header';
import SubmitBtn from './SubmitBtn';
import SwitchBtn from './SwitchBtn';
import { connect } from "react-redux";
import { useTranslation } from 'react-i18next';
import { signIn } from '../redux/actions/index';

const SignIn = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { t } = useTranslation();

    const signinSubmitHandler = (e) => {
        e.preventDefault();
        props.signIn();
    }
    
    return(
        <div className="signinCmpt" >
            <Header value={t('Sign In')} />
            <fieldset disabled={props.disableForm} style={{border: 'none'}}>
                <form onSubmit={signinSubmitHandler} >
                    <input 
                        type='email'
                        placeholder={t("E-mail")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        autoFocus
                        required />
                    <input 
                        type='password' 
                        placeholder={t("Password")}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        pattern="(.+?).{5,}" 
                        title={t("Must contain at least 6 or more characters")} 
                        required  />

                    <SubmitBtn value={t("Sign In")} />
                    <p>{t("Don't have account yet?")}</p>
                    <SwitchBtn value={t("Sign Up")} />
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


export default connect(stateToProps, { signIn })(SignIn);