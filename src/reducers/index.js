import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './authentication_reducer';

const rootReducer = combineReducers({
	form,
	auth,
});

export default rootReducer;
