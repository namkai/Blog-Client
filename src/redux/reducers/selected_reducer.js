import * as type from '../constants/actionTypes';

const initialState = {
	post: '',
	author: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
	case type.SELECT_POST:
		return { ...state, post: action.payload };
	case type.GET_AUTHOR_COMPLETED:
		return { ...state, author: action.payload };
	default:
		return state;
	}
}
