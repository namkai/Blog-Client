import * as type from '../constants/actionTypes';

export default function (state, action) {
	switch (action.type) {
		case type.FIND_RESULTS_COMPLETED:
			return { ...state, result: [...state.result, ...action.payload] };
		default:
			return state;
	}
}