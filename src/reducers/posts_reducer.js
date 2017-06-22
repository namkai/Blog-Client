import * as type from '../constants/actionTypes';

const intialState = {
	posts: [],
	selectedPostId: '',
};

export default function (state = intialState, action) {
	console.log(action)
	switch (action.type) {
	case type.FETCH_POSTS:
		return { posts: action.payload.posts, selectedPostId: '' };
	case type.SELECT_POST:
		return { ...state, selectedPostId: action.payload };
	case type.ADD_POST:
		return { ...state, posts: [...state.posts, action.payload.data] };
	case type.CLEAR:
		return { ...state, selectedPostId: '' };
	default:
		return state;
	}
}
