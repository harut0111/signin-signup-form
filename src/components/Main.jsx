import '../style/main.css'; 
import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Welcome from './Welcome';
import { connect } from 'react-redux';

function Main(props) {

    const {signin, signup, toggle } = props;

    const switchComponents = (isSignin, isSignup, isToggle) => {
        
        if(isSignin) {
            return <Welcome value={"signed in"} />;
        } else if(isSignup) {
            return <Welcome value={"signed up"} />;
        } else {
            return isToggle ? <SignUp /> : <SignIn />;
        }
    }

    return(
        <div className="mainCmpt">
            { switchComponents(signin, signup, toggle) }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        toggle: state.toggle,
        signin: state.signIn,
        signup: state.signUp
    }
}

export default connect(mapStateToProps)(Main);