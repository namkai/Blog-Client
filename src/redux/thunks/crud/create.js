import axios from 'axios';
import { normalize } from 'normalizr';
import { getAuthor } from '../../actions/author_actions';
import * as type from '../../constants/actionTypes';
import * as api from '../../constants/api';
import * as schema from '../../normalizr/entities';


export const createEntity = post => dispatch =>
	axios
		.post(`${api.ROOT}/posts`, post)
		.then(response => dispatch({ type: type.CREATE_POSTS_COMPLETED, payload: response.data }))
		.catch(error => console.log(error, 'i\'m the error'));

