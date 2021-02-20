import '../style/Main.css'
import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Welcome from './Welcome';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
// import Form  from './Form';

function Main(props) {

    const {signin, signup, toggle, disableForm } = props;

    const { t } = useTranslation();

    const switchComponents = (isSignin, isSignup, isToggle) => {
        
        if(isSignin) {
            return <Welcome value={t("signed in")} />;
        } else if(isSignup) {
            return <Welcome value={t("signed up")} />;
        } else {
            return isToggle ? <SignUp /> : <SignIn />;
        }
    }

    return(
        <div className="mainCmpt" style={{opacity: disableForm ? '0.5' : '1'}} >
            { switchComponents(signin, signup, toggle) }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        toggle: state.toggle,
        signin: state.signIn,
        signup: state.signUp,
        disableForm: state.disableForm,
    }
}

export default connect(mapStateToProps)(Main);