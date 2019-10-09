import { SWITCH, SIGNIN, SIGNUP, SIGNOUT, DISABLEFORM } from '../constants/index'; 

const initialState = {
    toggle: false,
    signIn: false,
    signUp: false,
    disableForm: false,
}

const rootReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SWITCH:
            return Object.assign({}, state, {
                toggle: !state.toggle,
            })
        case SIGNIN: 
            return Object.assign({}, state, {
                signIn: true,
            })
        case SIGNUP:
            return Object.assign({}, state, {
                signUp: true,
            })
        case SIGNOUT:
            return Object.assign({}, state, {
                signIn: false,
                signUp: false,
            })
        case DISABLEFORM:
            return Object.assign({}, state, {
                disableForm: !state.disableForm
            })
        default:
            return state;
    }
}

export default rootReducer;