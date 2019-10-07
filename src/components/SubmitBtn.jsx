import React from 'react';
import '../style/submitBtn.css';

const SubmitBtn = (props) => {
    return (
        <div className="submitBtn">
            <input type="submit"  value={props.value} />
        </div>
    )
}

export default SubmitBtn;