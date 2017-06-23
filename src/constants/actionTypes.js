//// Authentication constants
//export const AUTH_USER = 'AUTH_USER';
//export const UNAUTH_USER = 'AUTH_USER';
//export const AUTH_ERROR = 'AUTH_USER';
//
//// Posts constants
//export const FETCH_POSTS = 'FETCH_POSTS';
//export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED';
//export const SELECT_POST = 'SELECT_POST';
//export const ADD_POST = 'ADD_POST';
//
//// User constants
//export const GET_USER = 'GET_USER';
//
//// Query constants
//export const UPDATE_QUERY = 'UPDATE_QUERY';
//
//// Clears the query reducer and selected post reducer;
//export const CLEAR = 'CLEAR';
const constants = [
	'AUTH_USER',
	'AUTH_USER',
	'AUTH_USER',
	'FETCH_POSTS',
	'SELECT_POST',
	'ADD_POST',
	'GET_USER',
	'UPDATE_QUERY',
	'CLEAR',
];

constants.forEach(type => {
	if (type.endsWith('_')) {
		Object.assign(exports, {
			[`${type}STARTED`]: `${type}STARTED`,
			[`${type}COMPLETED`]: `${type}COMPLETED`,
			[`${type}FAILED`]: `${type}FAILED`,
		});
	} else {
		Object.assign(exports, {
			[type]: type,
		});
	}
});

