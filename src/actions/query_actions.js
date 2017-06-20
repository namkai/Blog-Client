import * as type from '../constants/actionTypes';

export const updateQuery = data => ({
	type: type.UPDATE_QUERY,
	payload: data,
});
