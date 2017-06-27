import _ from 'lodash';
import { normalize } from 'normalizr';
import * as schema from '../../normalizr/entities';

export default function createEntityReducer(entityName = '') {
	const entityConstant = entityName.toUpperCase();
	let normalizedData = null;
	return (state = {}, { type, payload }) => {
		switch (type) {
			// FIND MANY  FIND_USERS_*
		case `FIND_${entityConstant}_PENDING`:
			return { ...state, [entityName]: payload };
		case `FIND_${entityConstant}_COMPLETED`:
			normalizedData = normalize(payload, schema.arrayOfPosts);
			return _.merge(state, normalizedData.entities);
		case `FIND_${entityConstant}_FAILED`:
			return { ...state, ...payload };
			// FETCH ONE   FETCH_USER_*
		case `FETCH_${entityConstant}_PENDING`:
			return { ...state, [entityName]: payload };
		case `FETCH_${entityConstant}_COMPLETED`:
			normalizedData = normalize(payload, schema.post);
			return _.merge(state, normalizedData.entities);
		case `FETCH_${entityConstant}_FAILED`:
			return { ...state, [entityName]: payload };
			// CREATE ONE  CREATE_USER_*
		case `CREATE_${entityConstant}_PENDING`:
			return { ...state, [entityName]: payload };
		case `CREATE_${entityConstant}_COMPLETED`:
			return { ...state, [entityName]: { ...state[entityName], ...payload } };
		case `CREATE_${entityConstant}_FAILED`:
			return { ...state, [entityName]: payload };
			// UPDATE ONE  UPDATE_USER_*
		case `UPDATE_${entityConstant}_PENDING`:
			return { ...state, [entityName]: payload };
		case `UPDATE_${entityConstant}_COMPLETED`:
			return { ...state, [entityName]: { ...state[entityName], ...payload } };
		case `UPDATE_${entityConstant}_FAILED`:
			// DELETE ONE    DELETE_USER_*
		case `DELETE_${entityConstant}_PENDING`:
			return { ...state, [entityName]: payload };
		case `DELETE_${entityConstant}_COMPLETED`:
			return { ...state, [entityName]: payload };
		case `DELETE_${entityConstant}_FAILED`:
			return { ...state, [entityName]: payload };
		default:
			return state;
		}
	};
}
