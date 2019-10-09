import React from 'react';

const Header = (props) => {
    return(
        <div className="header">
            <h1 style={{margin: "0px 0px 40px"}}>{props.value}</h1>
        </div>
    )
}

export default Header;