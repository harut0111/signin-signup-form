import React from 'react';
import "../style/langNav.css";
import i18next from 'i18next';


const langNav = () => {

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return(
        <div className="langNav">
            <nav>
                <span onClick={()=>handleClick('en')}> English </span>
                <span onClick={()=>handleClick('arb')}> العربية </span>
                <span onClick={()=>handleClick('arm')}> Հայերեն </span>
            </nav>
        </div>
    )
}

export default langNav;