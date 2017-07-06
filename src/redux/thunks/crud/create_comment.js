import axios from 'axios';
import * as type from '../../constants/actionTypes';
import * as api from '../../constants/api';

export const createComment = comment => dispatch =>
	axios
		.post(`${api.ROOT}/posts/${comment.postId}/comments`, comment)
		.then(res => {
			console.log(`i'm the response in createCOmment!`, res)
			dispatch({ type: type.CREATE_COMMENTS_COMPLETED, payload: res.data.comment })
		})
		.catch(error => console.log(error));
