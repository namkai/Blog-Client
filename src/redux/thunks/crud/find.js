import axios from 'axios';
import * as type from '../../constants/actionTypes';
import * as api from '../../constants/api';
import { normalize } from 'normalizr';
import * as schema from '../../normalizr/entities';

export const findEntities = () => dispatch => {
	return axios
		.get(`${api.ROOT}/posts`)
		.then((response) => {
			const normalizedData = normalize(response.data.posts, schema.arrayOfPosts);
			console.log(normalizedData)
			dispatch({ type: type.FIND_POSTS_COMPLETED, payload: normalizedData.entities.posts });
			dispatch({ type: type.FIND_COMMENTS_COMPLETED, payload: normalizedData.entities.comments });
			dispatch({ type: type.FIND_AUTHORS_COMPLETED, payload: normalizedData.entities.authors });
			dispatch({ type: type.FIND_RESULTS_COMPLETED, payload: normalizedData.result });
		})
		.catch(err => {
			dispatch({ type: type.FIND_POSTS_FAILED });
		});
};
