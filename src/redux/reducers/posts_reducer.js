import { normalize } from 'normalizr';
import * as type from '../constants/actionTypes';
import * as schema from '../normalizr/entities';

const intialState = {
	posts: [],
	selectedPostId: '',
};

export default function (state = {}, action) {
	switch (action.type) {
	case type.FETCH_POSTS_COMPLETED:
		const allNormalizedPosts = normalize(action.payload.posts, schema.arrayOfPosts);
		return { ...allNormalizedPosts.entities };
	case type.ADD_POST:
		const normalizedPost = normalize(action.payload.data, schema.post);
		return { ...state, ...normalizedPost.entities };
	case type.CLEAR:
		return { ...state, selectedPostId: '' };
	default:
		return state;
	}
}
