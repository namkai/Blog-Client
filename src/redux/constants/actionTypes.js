const constants = [
	'UNAUTH_USER_',
	'FIND_AUTHORS_',
	'FIND_POSTS_',
	'FIND_COMMENTS_',
	'AUTH_ERROR',
	'AUTH_USER_',
	'FETCH_POSTS_',
	'GET_AUTHOR_',
	'SELECT_POST',
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

