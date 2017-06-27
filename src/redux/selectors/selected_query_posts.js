import { createSelector } from 'reselect';
import getAllPosts from './all_posts_selector';

// Grabs posts state from store.
const postsSelector = state => getAllPosts(state);

const querySelector = state => state.query;

// Filters the Cardlist based on selectedTab as well as the current query
const getQueriedPosts = (posts, query) =>
	posts
		.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
		.reverse();

export default createSelector(
	postsSelector,
	querySelector,
	getQueriedPosts,
);
