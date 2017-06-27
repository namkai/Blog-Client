const constants = [
	'FIND_AUTHORS_',
	'FIND_POSTS_',
	'FIND_COMMENTS_',
	'FIND_RESULTS_',
	'FETCH_POSTS_',
	'FETCH_COMMENTS_',
	'FETCH_AUTHORS_',
	'FETCH_RESULTS_',
	'CREATE_POSTS_',
	'CREATE_COMMENTS_',
	'CREATE_AUTHORS_',
	'CREATE_RESULTS_',
	'UPDATE_POSTS_',
	'UPDATE_COMMENTS_',
	'UPDATE_AUTHORS_',
	'UPDATE_RESULTS_',
	'DELETE_POSTS_',
	'DELETE_COMMENTS_',
	'DELETE_AUTHORS_',
	'DELETE_RESULTS_',
	'AUTH_ERROR',
	'AUTH_USER_',
	'UNAUTH_USER_',
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

