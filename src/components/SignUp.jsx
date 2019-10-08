import React from 'react';
import Header from './Header';
import SubmitBtn from './SubmitBtn';
import SwitchBtn from './SwitchBtn';
import { connect } from "react-redux";
import { useTranslation } from 'react-i18next';
import { signUp } from '../redux/actions/index';


const SignUp = (props) => {

    const { t } = useTranslation();

    const signupSubmitHandler = (e) => {
        e.preventDefault();
        props.signUp();
    }

    return (
        <div className="singnupCmpt">
            <Header value={t("Sign Up")} />
            <form onSubmit={signupSubmitHandler}>
                <input 
                    type="email" 
                    required
                    placeholder={t('Enter your email')} />
                <input 
                    type="password" 
                    required
                    placeholder={t('Enter your password')} />
                <input 
                    type="password" 
                    required
                    placeholder={t('Confirm password')} />
                <input 
                    type="text" 
                    required
                    placeholder={t('Enter Your Name')} />

                <SubmitBtn value={t("Sign Up")} />
                <p>{t("Already Registered?")}</p>
                <SwitchBtn value={t("Sign In")} />
            </form>

        </div>
    )
}

export default connect(null, { signUp })(SignUp);