import { denormalize } from 'normalizr';
import * as schema from '../normalizr/entities';

const getAllPosts = (state) => {
	const result = state.entities.result;
	return denormalize(result, schema.arrayOfPosts, state.entities);
};

export default getAllPosts;

