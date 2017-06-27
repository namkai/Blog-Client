import axios from 'axios';
import { normalize } from 'normalizr';
import * as type from '../../constants/actionTypes';
import * as api from '../../constants/api';
import * as schema from '../../normalizr/entities';

export const updateEntity = post => dispatch =>
	axios
		.put(`${api.ROOT}/posts/${post._id}`, post)
		.then(response => {
			console.log(response, `I"M THE RESPONSE`);
			const normalizedData = normalize(response.data, schema.post);
			console.log(normalizedData, `i'm the normalized data`)
			dispatch({ type: type.UPDATE_POSTS_COMPLETED, payload: normalizedData.entities.posts });
//			dispatch({ type: type.UPDATE_COMMENTS_COMPLETED, payload: normalizedData.entities.comments });
//			dispatch({ type: type.UPDATE_AUTHORS_COMPLETED, payload: normalizedData.entities.authors });
		})
		.catch(error => console.log(error, `i'm the error`));
