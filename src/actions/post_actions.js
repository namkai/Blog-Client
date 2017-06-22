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
		.then(response => dispatch({ type: type.FETCH_POSTS, payload: response.data }))
		.catch(err => dispatch({ type: type.FETCH_POSTS_FAILED }));


export const createPost = payload => dispatch =>
	axios
		.post(`${api.ROOT}/posts`, payload).then(response => dispatch({ type: type.ADD_POST, payload: response }))
		.catch(err => console.log(err));

export const selectPost = postId => ({ type: type.SELECT_POST, payload: postId });

export const deletePost = postId => dispatch =>
	axios
		.delete(`${api.ROOT}/posts/${postId}`)
		.then(response => {
			dispatch({ type: type.CLEAR });
			dispatch({ type: type.FETCH_POSTS, payload: response.data });
		})
		.catch(err => console.log(err));

export const editPost = post => dispatch => axios.put(`${api.ROOT}/posts/${post._id}`, post)
	.then(response => dispatch({ type: type.FETCH_POSTS, payload: response.data }));

export const addComment = comment => dispatch => axios.post(`${api.ROOT}/posts/${comment.postId}/comments`, comment)
	.then(res => dispatch({ type: type.FETCH_POSTS, payload: res.data.post }))
	.catch(error => console.log(error))