import { createSelector } from 'reselect';

import queriedPosts from './selected_query_posts';

const idSelector = state => state.selectedPost;

const getPost = (posts, id) => id.length === 0 ? posts : posts.filter(post => post._id === id);

export default createSelector(
	queriedPosts,
	idSelector,
	getPost,
);
