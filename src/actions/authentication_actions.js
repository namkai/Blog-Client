import axios from 'axios';
import { history } from '../index';
import * as type from '../constants/actionTypes';
import * as api from '../constants/api';

// Submit email/password to the server
// If request is good...
//    - Update state to indicate user is authenticated
//    - Save the JWT token
//    - Redirect to the route '/feature'

// If request is bad...
//		- Show an error to the user
export const authError = error => ({ type: type.AUTH_ERROR, payload: error });

export const signinUser = user => dispatch =>
	axios
		.post(`${api.ROOT}/signin`, user)
		.then(response => {
			dispatch({ type: type.AUTH_USER });
			localStorage.setItem('token', response.data.token);
			history.push('/posts');
		})
		.catch(error => dispatch(authError('Bad Login Info')));

export const signupUser = ({ email, password }) => dispatch =>
	axios
		.post(`${api.ROOT}/signup`, { email, password })
		.then((response) => {
			dispatch({ type: type.AUTH_USER });
			localStorage.setItem('token', response.data.token);
			history.push('/posts');
		})
		.catch(response => dispatch(authError('Email already in use')));

export const signoutUser = () => {
	localStorage.removeItem('token');
	return { type: type.UNAUTH_USER };
};
