const constants = [
	'UNAUTH_USER_',
	'AUTH_ERROR',
	'AUTH_USER_',
	'FETCH_POSTS_',
	'SELECT_POST_',
	'ADD_POST_',
	'GET_USER_',
	'UPDATE_QUERY',
	'CLEAR',
];

constants.forEach(type => {
	if (type.endsWith('_')) {
		Object.assign(module.exports, {
			[`${type}STARTED`]: `${type}STARTED`,
			[`${type}COMPLETED`]: `${type}COMPLETED`,
			[`${type}FAILED`]: `${type}FAILED`,
		});
	} else {
		Object.assign(module.exports, {
			[type]: type,
		});
	}
});

