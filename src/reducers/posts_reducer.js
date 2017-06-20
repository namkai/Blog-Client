import * as type from '../constants/actionTypes';

const intialState = {
	posts: [],
	selectedPostId: '',
};

export default function (state = intialState, action) {
	switch (action.type) {
	case type.FETCH_POSTS:
		return { posts: action.payload.posts, selectedPostId: '' };
	case type.SELECT_POST:
		return { ...state, selectedPostId: action.payload };
	default:
		return state;
	}
}
