import React from 'react';
import '../style/switchBtn.css';
import { switchCmpt } from "../redux/actions/switch";
import { connect } from 'react-redux';


const SwitchBtn = (props) => {

    // const handleOnSignUpClick = (e) => {
    //     alert("asd");
    // } 
    
    return (
        <div className="switchBtn">
            <input 
                type="button" 
                value={props.value} 
                onClick={props.switchCmpt}/>
        </div>
    )
}

const mapDispatchToProps = {
    switchCmpt,
}

export default connect(null, mapDispatchToProps)(SwitchBtn);