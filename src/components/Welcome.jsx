import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../redux/actions/index';

const Welcome = (props) => {

    const {value, signOut} = props;

    return (
        <div className='welcome'>
            <nav>
                <button onClick={signOut}>Sign Out</button>
            </nav>
            <h3>Welcome!</h3>
            <h3>you have <span style={{color: 'red'}}>{value}</span> successfully.</h3>
        </div>
    )
}


export default connect(null, { signOut })(Welcome);