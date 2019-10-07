import '../style/main.css'; 
import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { connect } from 'react-redux';

function Main(props) {

    return(
        <div className="mainCmpt">
           { props.registre ? <SignIn />:<SignUp /> }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        registre: state.registre,
    }
}

export default connect(mapStateToProps)(Main);