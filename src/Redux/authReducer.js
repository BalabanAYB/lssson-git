import { usersAPI, authMeAPI } from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_ME = 'SET_AUTH_ME';

export const setAuthMe = (id, login, email, isAuth) => ({ type: SET_AUTH_ME, payload: { id, login, email, isAuth } })


export const authMeThunk = () => async (dispatch) => {
    let data = await usersAPI.getAuthMe()
                if (data.resultCode == 0) {
                    let { id, login, email } = data.data
                    dispatch(setAuthMe(id, login, email, true))
    }
}

export const loginAuthMeThunk = (email, password, rememberMe) => async (dispatch) => {
       let data = await authMeAPI.login(email, password, rememberMe)
                if (data.resultCode == 0) {
                    dispatch(authMeThunk())
                }
                else {
                    let message = data.messages.length > 0 ? data.messages[0] : "some error"
                    dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logoutAuthMeThunk = () => async (dispatch) => {
      let data = await authMeAPI.logout()
                if (data.resultCode == 0) {
                    dispatch(setAuthMe(null, null, null, false))
    }
}


let initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_ME: {
            return {
                ...state,
                ...action.payload
            }
        }

        default:
            return state;
    }
}

export default authReducer;