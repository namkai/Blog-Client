import axios from 'axios';
import * as type from '../constants/actionTypes';
import * as api from '../constants/api';

export const fetchMessage = () => dispatch =>
	axios
		.get(api.ROOT, { headers: { authorization: localStorage.getItem('token') } })
		.then(response => console.log(response.data));

export const fetchPosts = () => dispatch =>
	axios
		.get(`${api.ROOT}/posts`)
		.then(response => dispatch({ type: type.FETCH_POSTS, payload: response.data }));

export const createPost = payload => dispatch =>
	axios
		.post(`${api.ROOT}/posts`, payload).then(response => console.log(response))
		.catch(err => console.log(err));
