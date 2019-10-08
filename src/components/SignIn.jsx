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
        <div className="signinCmpt">
            <Header value={t('Sign In')} />
            <form onSubmit={signinSubmitHandler}>
                <input 
                    type='email' 
                    required 
                    placeholder={t("E-mail")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <input 
                    type='password' 
                    required 
                    placeholder={t("Password")}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <SubmitBtn value={t("Sign In")} />
                <p>{t("Don't have account yet?")}</p>
                <SwitchBtn value={t("Sign Up")} />
            </form>
        </div>
    )
}

export default connect(null, { signIn })(SignIn);