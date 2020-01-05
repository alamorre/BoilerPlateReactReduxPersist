import axios from 'axios'
import * as str from './index'

export const loginAuth = (values, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().account;
  
    dispatch({
        type: str.LOGIN_AUTH,
    })
}

export const logoutAuth = (values, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().account;
  
    dispatch({
        type: str.LOGOUT_AUTH,
    })
}