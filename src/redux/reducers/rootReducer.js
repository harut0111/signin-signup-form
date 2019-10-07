import { SWITCH } from '../constants/index'; 

const initialState = {
    registre: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH:
            return Object.assign({}, state, {
                registre: !state.registre,
            })
        default:
            return state;
    }
}

export default rootReducer;