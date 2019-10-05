import React from 'react';

const SwitchBtn = (props) => {

    const handleOnSignUpClick = (e) => {
        alert("asd");
    } 
    return (
        <div className="switchBtn">
            <input 
                type="button" 
                value={props.value} 
                onClick={handleOnSignUpClick}/>
        </div>
    )
}

export default SwitchBtn;