import axios from 'axios';
import * as type from '../constants/actionTypes';
import * as api from '../constants/api';
import { history } from '../../index';

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
		.then((response) => {
			dispatch({ type: type.AUTH_USER_COMPLETED });
			localStorage.setItem('token', response.data.token);
			history.push('/');
		})
		.catch(error => dispatch(authError('Bad Login Info')));

export const signupUser = ({ name, email, password, profilePhoto, backgroundPhoto }) => dispatch =>
	axios
		.post(`${api.ROOT}/signup`, { name, email, password, profilePhoto, backgroundPhoto })
		.then((response) => {
			dispatch({ type: type.AUTH_USER_COMPLETED });
			localStorage.setItem('token', response.data.token);
			history.push('/');
		})
		.catch(response => dispatch(authError('Email already in use')));

export const signoutUser = () => {
	localStorage.removeItem('token');
	return { type: type.UNAUTH_USER_COMPLETED };
};

export const getUserData = token => dispatch => {
	console.log(`i'm hit!`)
	axios
		.get(`${api.ROOT}`, { headers: { Authorization: token } })
		.then(({ data: { user } }) => dispatch({ type: type.GET_USER_COMPLETED, payload: user }))
		.catch(err => console.log(err))
}
