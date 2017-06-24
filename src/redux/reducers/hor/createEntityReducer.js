export default function createEntityReducer(entityName = '') {
	entityName = entityName.toUpperCase();
	return (state = {}, { type, payload }) => {
		switch (type) {
			// FIND MANY  FIND_USERS_*
		case `FIND_${entityName}_PENDING`:
			return { ...state, [entityName]: payload };
		case `FIND_${entityName}_SUCCESS`:
			return { ...state, [entityName]: payload };
		case `FIND_${entityName}_FAILED`:
			return { ...state, [entityName]: payload };
			// FETCH ONE   FETCH_USER_*
		case `FETCH_${entityName}_PENDING`:
			return { ...state, [entityName]: payload };
		case `FETCH_${entityName}_SUCCESS`:
			return { ...state, [entityName]: payload };
		case `FETCH_${entityName}_FAILED`:
			return { ...state, [entityName]: payload };
			// CREATE ONE  CREATE_USER_*
		case `CREATE_${entityName}_PENDING`:
			return { ...state, [entityName]: payload };
		case `CREATE_${entityName}_SUCCESS`:
			return { ...state, [entityName]: payload };
		case `CREATE_${entityName}_FAILED`:
			return { ...state, [entityName]: payload };
			// UPDATE ONE  UPDATE_USER_*
		case `UPDATE_${entityName}_PENDING`:
			return { ...state, [entityName]: payload };
		case `UPDATE_${entityName}_SUCCESS`:
			return { ...state, [entityName]: payload };
		case `UPDATE_${entityName}_FAILED`:
			// DELETE ONE    DELETE_USER_*
		case `DELETE_${entityName}_PENDING`:
			return { ...state, [entityName]: payload };
		case `DELETE_${entityName}_SUCCESS`:
			return { ...state, [entityName]: payload };
		case `DELETE_${entityName}_FAILED`:
			return { ...state, [entityName]: payload };
		default:
			return state;
		}
	};
}
