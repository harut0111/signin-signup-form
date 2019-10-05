import React, {useState} from 'react';
import SignIn from './SignIn';
import '../style/Main.css';

export default function Main() {

    // const [registre, setRegistre] = useState(false);
    
    return(
        <div className="mainCmpt">
            <SignIn signUpHand={handleOnSignUpClick}/>
        </div>
    )
}