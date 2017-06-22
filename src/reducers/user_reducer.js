import * as type from '../constants/actionTypes';

export default function (state = {}, action) {
	switch (action.type) {
	case type.GET_USER:
		return action.payload;
	default:
		return state;
	}
}
