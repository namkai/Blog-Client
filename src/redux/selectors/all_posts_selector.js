import { denormalize } from 'normalizr';
import * as schema from '../normalizr/entities';

const getAllPosts = (state) => {
	const posts = denormalize(state.posts, schema.arrayOfPosts, state.posts);
	console.log(posts, `I"M THE POSTS`);
	return posts;
};

export default getAllPosts;

