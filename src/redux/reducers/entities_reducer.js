import createEntityReducer from './hor/createEntityReducer';

const initialState = {
	posts: {},
	comments: {},
	authors: {},
	result: [],
};

//export default function (state = intialState, action) {
//	switch (action.type) {
//		case type.FETCH_POSTS_COMPLETED:
//		return { ...action.payload.entities, result: action.payload.result };
//	case type.ADD_POST:
//		const normalizedPost = normalize(action.payload.data, schema.post);
//		return { ...state, ...normalizedPost.entities };
//	case type.CLEAR:
//		return { ...state, selectedPostId: '' };
//	default:
//		return state;
//	}
//}


const posts = createEntityReducer('posts');
const authors = createEntityReducer('authors');
const comments = createEntityReducer('comments');

const entities = (state = initialState, action) => {
	state = authors(state, action);
	state = posts(state, action);
	state = comments(state, action);
	console.log(`i'm the new state`, state)
	return state;
};

export default entities;
