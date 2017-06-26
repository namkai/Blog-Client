import axios from 'axios';
import { normalize } from 'normalizr';
import * as type from '../constants/actionTypes';
import * as api from '../constants/api';
import * as schema from '../normalizr/entities';

export const getAuthor = id => dispatch => {
	axios
		.get(`${api.ROOT}/users/${id}`)
		.then(response => dispatch({ type: type.GET_AUTHOR_COMPLETED, payload: response.data }))
		.catch(err => console.log(err));
};
