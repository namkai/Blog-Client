export default function createEntityReducer(entityName = '') {
	entityName = entityName.toUpperCase();
	return (state = [], action) => {
		switch (action.type) {
			// FIND MANY  FIND_USERS_*
		case `FIND_${entityName}_PENDING`:
			return;
		case `FIND_${entityName}_SUCCESS`:
			return;
		case `FIND_${entityName}_FAILED`:
			return;
			// FETCH ONE   FETCH_USER_*
		case `FETCH_${entityName}_PENDING`:
			return 'pending';
		case `FETCH_${entityName}_SUCCESS`:
			return action.payload;
		case `FETCH_${entityName}_FAILED`:
			return action.payload;
			// CREATE ONE  CREATE_USER_*
		case `CREATE_${entityName}_PENDING`:
			return;
		case `CREATE_${entityName}_SUCCESS`:
			return;
		case `CREATE_${entityName}_FAILED`:
			return;
			// UPDATE ONE  UPDATE_USER_*
		case `UPDATE_${entityName}_PENDING`:
			return;
		case `UPDATE_${entityName}_SUCCESS`:
			return;
		case `UPDATE_${entityName}_FAILED`:
			// DELETE ONE    DELETE_USER_*
		case `DELETE_${entityName}_PENDING`:
			return;
		case `DELETE_${entityName}_SUCCESS`:
			return;
		case `DELETE_${entityName}_FAILED`:
			return;
		default:
			return state;
		}
	};
}
