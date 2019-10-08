import React from 'react';
import { connect } from 'react-redux';
import { signIn, signUp } from '../redux/actions/index';

const Welcome = (props) => {

    const {value, signIn} = props;

    const onClickHandler = () => {
        signUp(false);
        signIn(false);
    }

    return (
        <div className='welcome'>
            <nav>
                <button onClick={onClickHandler}>Sign Out</button>
            </nav>
            <h1>Welcome! you have {value} successfully.</h1>
        </div>
    )
}

const mapDispatchToProps = {
    signUp,
    signIn, 
   
}

export default connect(null, mapDispatchToProps)(Welcome);