import axios from 'axios';
import { normalize } from 'normalizr';
import * as type from '../../constants/actionTypes';
import * as api from '../../constants/api';
import * as schema from '../../normalizr/entities';

export const deleteEntity = postId => dispatch =>
	axios
		.delete(`${api.ROOT}/posts/${postId}`)
		.then(response => {
			dispatch({ type: type.DELETE_POST_COMPLETED, payload: postId });
//			dispatch({ type: type.DELETE_COMMENT_COMPLETED, payload: normalizedData.entities.comments });
//			dispatch({ type: type.DELETE_AUTHOR_COMPLETED, payload: normalizedData.entities.authors });
		})
		.catch(error => console.log(error, `i'm the error`));
