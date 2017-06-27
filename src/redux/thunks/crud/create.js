import axios from 'axios';
import { normalize } from 'normalizr';
import { getAuthor } from '../../actions/author_actions';
import * as type from '../../constants/actionTypes';
import * as api from '../../constants/api';
import * as schema from '../../normalizr/entities';

export const createEntity = post => dispatch =>
	axios
		.post(`${api.ROOT}/posts`, post)
		.then((response) => {
			const normalizedData = normalize(response.data, schema.post);
			dispatch({ type: type.CREATE_POSTS_COMPLETED, payload: normalizedData.entities.posts });
			dispatch({ type: type.CREATE_COMMENTS_COMPLETED, payload: normalizedData.entities.comments });
			dispatch({ type: type.CREATE_AUTHORS_COMPLETED, payload: normalizedData.entities.authors });
			dispatch({ type: type.CREATE_RESULTS_COMPLETED, payload: normalizedData.result });
		})
		.catch(error => console.log(error, 'i\'m the error'));

