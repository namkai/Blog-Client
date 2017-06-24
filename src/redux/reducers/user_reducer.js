import * as type from '../constants/actionTypes';

export default function (state = {}, action) {
	switch (action.type) {
	case type.GET_USER_COMPLETED:
		return action.payload;
	default:
		return state;
	}
}
