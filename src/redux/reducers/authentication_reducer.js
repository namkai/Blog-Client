import * as type from '../../constants/actionTypes';

export default function (state = { authenticated: false }, action) {
	switch (action.type) {
	case type.AUTH_USER:
		return { ...state, error: '', authenticated: true };
	case type.UNAUTH_USER:
		return { ...state, authenticated: false };
	case type.AUTH_ERROR:
		return { ...state, error: action.payload };
	default:
		return state;
	}
}
