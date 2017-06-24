import createEntityReducer from './hor/createEntityReducer';

const posts = createEntityReducer('posts');
const user = createEntityReducer('users');
const comments = createEntityReducer('comments');

const entities = (state, action) => {
	state = user(state, action);
	state = posts(state, action);
	state = comments(state, action);
	return state;
};

export default entities;
