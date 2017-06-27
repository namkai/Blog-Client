import axios from 'axios';
import { normalize } from 'normalizr';
import { getAuthor } from '../../actions/author_actions';
import * as type from '../../constants/actionTypes';
import * as api from '../../constants/api';
import * as schema from '../../normalizr/entities';

export const fetchEntity = (id) => dispatch =>
	axios
		.get(`${api.ROOT}/posts/${id}`)
		.then(response => {
			dispatch(getAuthor(response.data.post.author.id));
			const normalizedData = normalize(response.data.post, schema.post);
			dispatch({ type: type.FETCH_POSTS_COMPLETED, payload: normalizedData.entities.posts });
			dispatch({ type: type.FETCH_COMMENTS_COMPLETED, payload: normalizedData.entities.comments });
			dispatch({ type: type.FETCH_AUTHORS_COMPLETED, payload: normalizedData.entities.authors });
			dispatch({ type: type.FETCH_RESULTS_COMPLETED, payload: normalizedData.result })})
		.catch(error => console.log(error, `i'm the error`))
