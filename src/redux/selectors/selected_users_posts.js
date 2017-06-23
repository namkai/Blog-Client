import { createSelector } from 'reselect';

import selectedPosts from './selected_post';

const userSelector = state => state.user;


const selectUsersPosts = (user, posts) => posts.filter(post => post.author.id === user._id);

export default createSelector(
	userSelector,
	selectedPosts,
	selectUsersPosts,
);