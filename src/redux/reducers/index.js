import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './authentication_reducer';
import posts from './posts_reducer';
import user from './user_reducer';
import query from './query_reducer';

const rootReducer = combineReducers({
	form,
	auth,
	posts,
	user,
	query,
});

export default rootReducer;