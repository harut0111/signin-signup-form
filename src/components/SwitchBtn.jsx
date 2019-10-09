import '../style/switchBtn.css';
import React from 'react';
import { switchCmpt } from "../redux/actions/index";
import { connect } from 'react-redux';


const SwitchBtn = (props) => {

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