import axios from 'axios';
import { normalize } from 'normalizr';
import * as type from '../../constants/actionTypes';
import * as api from '../../constants/api';
import * as schema from '../../normalizr/entities';

export const findEntities = () => dispatch =>
	axios
		.get(`${api.ROOT}/posts`)
		.then((response) => {
			dispatch({ type: type.FIND_POSTS_COMPLETED, payload: response.data.posts });
		})
		.catch(err => {
			dispatch({ type: type.FIND_POSTS_FAILED });
		});

