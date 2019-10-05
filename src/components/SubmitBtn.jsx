import React from 'react';

const SubmitBtn = (props) => {
    return (
        <div className="submitBtn">
            <input type="submit"  value={props.value} />
        </div>
    )
}

export default SubmitBtn;