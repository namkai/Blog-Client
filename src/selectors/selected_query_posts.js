import { createSelector } from 'reselect';

// Grabs posts state from store.
const postsSelector = state => state.posts.posts;

// Grabs query state from store.
const querySelector = state => state.query;

// Filters the Cardlist based on selectedTab as well as the current query
const getQueriedPosts = (posts, query) => posts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));

export default createSelector(
	postsSelector,
	querySelector,
	getQueriedPosts,
);
