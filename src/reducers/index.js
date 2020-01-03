import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AccountReducer from './accountReducer';

const rootReducer = combineReducers({
  form: formReducer,
  account: AccountReducer,
});

export default rootReducer;
