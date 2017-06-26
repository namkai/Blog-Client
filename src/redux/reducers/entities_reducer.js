import createEntityReducer from './hor/createEntityReducer';
import result from './result_reducer';

const posts = createEntityReducer('posts');
const authors = createEntityReducer('authors');
const comments = createEntityReducer('comments');

const initialState = {
	posts: {},
	comments: {},
	authors: {},
	result: [],
};

const entities = (state = initialState, action) => {
	state = authors(state, action);
	state = posts(state, action);
	state = comments(state, action);
	state = result(state, action);
	return state;
};

export default entities;
