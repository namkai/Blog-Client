import { normalize } from 'normalizr';
import * as type from '../constants/actionTypes';
import * as schema from '../normalizr/entities';

const intialState = {
	posts: {},
	comments: {},
	authors: {},
	result: [],
};

export default function (state = intialState, action) {
	switch (action.type) {
	case type.FETCH_POSTS_COMPLETED:
		const allNormalizedPosts = normalize(action.payload.posts, schema.arrayOfPosts);
		return { ...allNormalizedPosts.entities, result: allNormalizedPosts.result };
	case type.ADD_POST:
		const normalizedPost = normalize(action.payload.data, schema.post);
		return { ...state, ...normalizedPost.entities };
	case type.CLEAR:
		return { ...state, selectedPostId: '' };
	default:
		return state;
	}
}
