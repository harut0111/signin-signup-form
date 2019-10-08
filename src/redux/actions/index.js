import { SWITCH, SIGNIN_ASYNC, SIGNUP_ASYNC } from '../constants/index';


const switchCmpt = () => {
    return { type: SWITCH }
}

const signIn = (isSignin) => {
    return { type: SIGNIN_ASYNC, payload: isSignin }
}

const signUp = (isSignup) => {
    console.log(isSignup);
    return { type: SIGNUP_ASYNC, payload: isSignup }
}

export { switchCmpt, signIn, signUp };