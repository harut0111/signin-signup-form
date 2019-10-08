import { SWITCH, SIGNIN_ASYNC, SIGNUP_ASYNC, SIGNOUT } from '../constants/index';


const switchCmpt = () => {
    return { type: SWITCH }
}

const signIn = () => {
    return { type: SIGNIN_ASYNC }
}

const signUp = () => {
    return { type: SIGNUP_ASYNC }
}

const signOut = () => {
    return { type: SIGNOUT }
}

export { switchCmpt, signIn, signUp, signOut };