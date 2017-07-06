import _ from 'lodash';
import { normalize } from 'normalizr';
import * as schema from '../../normalizr/entities';

export default function createEntityReducer(entityName = '') {
	const entityConstant = entityName.toUpperCase();
	let normalizedData = null;
	return (state = {}, { type, payload }) => {
		switch (type) {
			// FIND MANY  FIND_USERS_*
		case `FIND_${entityConstant}_STARTED`:
			return { ...state, [entityName]: payload };
		case `FIND_${entityConstant}_COMPLETED`:
			normalizedData = normalize(payload, schema[`array_of_${entityName}`]);
			return { ..._.merge(state, normalizedData.entities), result: _.merge(state.result, normalizedData.result) };
		case `FIND_${entityConstant}_FAILED`:
			return { ...state, ...payload };
			// FETCH ONE   FETCH_USER_*
		case `FETCH_${entityConstant}_STARTED`:
			return { ...state, [entityName]: payload };
		case `FETCH_${entityConstant}_COMPLETED`:
			console.log(`i'm the FETCH POSTS`, payload)
			normalizedData = normalize(payload, schema.post);
			console.log(`i'm the normalized data!`, normalizedData)
			return { ..._.merge(state, normalizedData.entities) };
		case `FETCH_${entityConstant}_FAILED`:
			return { ...state, [entityName]: payload };
			// CREATE ONE  CREATE_USER_*
		case `CREATE_${entityConstant}_STARTED`:
			return { ...state, [entityName]: payload };
		case `CREATE_${entityConstant}_COMPLETED`:
			console.log(`i'm the payload!`, payload);
			normalizedData = normalize(payload, schema[entityName]);
			console.log(normalizedData, `i'm the normalized DATA`);
			return { ..._.merge(state, normalizedData.entities), result: [...state.result, normalizedData.result] };
		case `CREATE_${entityConstant}_FAILED`:
			return { ...state, [entityName]: payload };
			// UPDATE ONE  UPDATE_USER_*
		case `UPDATE_${entityConstant}_STARTED`:
			return { ...state, [entityName]: payload };
		case `UPDATE_${entityConstant}_COMPLETED`:
			return { ...state, [entityName]: { ...state[entityName], ...payload } };
		case `UPDATE_${entityConstant}_FAILED`:
			// DELETE ONE    DELETE_USER_*
		case `DELETE_${entityConstant}_STARTED`:
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
