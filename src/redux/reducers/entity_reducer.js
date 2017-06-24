import createEntityReducer from './hor/createEntityReducer';

const posts = createEntityReducer('posts');
const user = createEntityReducer('user');

const entities = (state, action) => {
	state = user(state, action);
	state = posts(state, action);
	return state;
};

export default entities;
