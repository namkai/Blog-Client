import * as type from '../../../constants/actionTypes';
import * as api from '../../../constants/api';

const signupUser = ({ name, email, password, profilePhoto, backgroundPhoto }) => dispatch =>
	axios
		.post(`${api.ROOT}/signup`, { name, email, password, profilePhoto, backgroundPhoto })
		.then((response) => {
			dispatch({ type: type.AUTH_USER });
			localStorage.setItem('token', response.data.token);
			history.push('/');
		})
		.catch(response => dispatch(authError('Email already in use')));

export default signupUser;
