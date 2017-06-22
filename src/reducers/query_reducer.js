import * as type from '../constants/actionTypes';

// Query_Reducer - Updates typed query
export default function (query = '', action) {
	switch (action.type) {
	case type.UPDATE_QUERY:
		return action.payload;
	case type.SELECT_POST:
		return '';
	default:
		return query;
	}
}
