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
			dispatch({ type: type.FETCH_POSTS_COMPLETED, payload: response.data.post });
		})
		.catch(error => console.log(error, `i'm the error`));
