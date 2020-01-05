import * as str from '../actions';

const initialState = {
    authenticated: false
};

export default function(state = initialState, action){

  switch (action.type) {
    case str.LOGIN_AUTH:
        return { ...state, authenticated: true };
    case str.LOGOUT_AUTH:
        return { ...state, authenticated: false };
    default:
      return state;
  }
}
