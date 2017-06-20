import * as type from '../constants/actionTypes';

export default function (state = [], action) {
	switch (action.type) {
	case type.FETCH_POSTS:
		return action.payload;
	default:
		return state;
	}
}
