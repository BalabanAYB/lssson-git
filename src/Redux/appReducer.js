import { authMeThunk } from "./authReducer";


const INITIALIZED = 'INITIALIZED';

const initialized = () => ({ type: INITIALIZED})


export const InitializedThunk = () => (dispatch) => {
    let promise = dispatch(authMeThunk())
    Promise.all([promise])
    .then(() => {
        dispatch(initialized())
    })
}



let initialState = {
    initialized:false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED: {
            return {
                ...state,
                initialized:true
            }
        }

        default:
            return state;
    }
}

export default appReducer;