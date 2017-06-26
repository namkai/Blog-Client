import axios from 'axios';
import { normalize } from 'normalizr';
import * as type from '../constants/actionTypes';
import * as api from '../constants/api';
import * as schema from '../normalizr/entities';

export const fetchMessage = () => dispatch =>
	axios
		.get(api.ROOT, { headers: { authorization: localStorage.getItem('token') } })
		.then(response => console.log(response.data));

export const fetchPosts = () => dispatch => {
	console.log(`i'm hit! in the fetchPOSTS`)
	return axios
		.get(`http://localhost:3090/posts`)
		.then((response) => {

			console.log(response)
			return dispatch({ type: type.FETCH_POSTS_COMPLETED, payload: response.data });
		})
		.catch(err => {
			console.log(`I"m the error`, err);
			return dispatch({ type: type.FETCH_POSTS_FAILED })
		});
}

export const createPost = payload => dispatch =>
	axios
		.post(`${api.ROOT}/posts`, payload)
		.then(response => dispatch({ type: type.ADD_POST_COMPLETED, payload: response }))
		.catch(err => console.log(err));

export const selectPost = postId => ({ type: type.SELECT_POST_COMPLETED, payload: postId });

export const deletePost = postId => dispatch =>
	axios
		.delete(`${api.ROOT}/posts/${postId}`)
		.then(response => {
			dispatch({ type: type.CLEAR });
			dispatch({ type: type.FETCH_POSTS_COMPLETED, payload: response.data });
		})
		.catch(err => console.log(err));

export const editPost = post => dispatch => axios.put(`${api.ROOT}/posts/${post._id}`, post)
	.then(response => dispatch({ type: type.FETCH_POSTS_COMPLETED, payload: response.data }));

export const addComment = comment => dispatch => axios.post(`${api.ROOT}/posts/${comment.postId}/comments`, comment)
	.then(res => dispatch({ type: type.FETCH_POSTS_COMPLETED, payload: res.data.post }))
	.catch(error => console.log(error));
