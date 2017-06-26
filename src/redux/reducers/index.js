import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './authentication_reducer';
import entities from './entities_reducer';
import user from './user_reducer';
import query from './query_reducer';

const rootReducer = combineReducers({
	form,
	auth,
	user,
	query,
	entities,
});

export default rootReducer;
