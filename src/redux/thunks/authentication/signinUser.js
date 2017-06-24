import * as type from '../../constants/actionTypes';
import * as api from '../../constants/api';

const signinUser = user => dispatch =>
	axios
		.post(`${api.ROOT}/signin`, user)
		.then((response) => {
			dispatch({ type: type.AUTH_USER });
			localStorage.setItem('token', response.data.token);
			history.push('/');
		})
		.catch(error => dispatch(authError('Bad Login Info')));

export default signinUser;
