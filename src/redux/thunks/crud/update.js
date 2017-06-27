import axios from 'axios';
import { normalize } from 'normalizr';
import * as type from '../../constants/actionTypes';
import * as api from '../../constants/api';
import * as schema from '../../normalizr/entities';

export const updateEntity = post => dispatch =>
	axios
		.put(`${api.ROOT}/posts/${post._id}`, post)
		.then(response => {
			const normalizedData = normalize(response.data, schema.post);
			dispatch({ type: type.UPDATE_POSTS_COMPLETED, payload: normalizedData.entities.posts });
		})
		.catch(error => console.log(error, `i'm the error`));
