import { SWITCH, SIGNIN, SIGNUP } from '../constants/index'; 

const initialState = {
    toggle: false,
    signIn: false,
    signUp: false,
}

const rootReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SWITCH:
            return Object.assign({}, state, {
                toggle: !state.toggle,
            })
        case SIGNIN: 
            return Object.assign({}, state, {
                signIn: action.payload
            })
        case SIGNUP:
            return Object.assign({}, state, {
                signUp: action.payload
            })
        default:
            return state;
    }
}

export default rootReducer;