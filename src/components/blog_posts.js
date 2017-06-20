import React from 'react';
import managePosts from './hoc/manage_posts';
import Post from './post';

export const BlogPosts = ({ posts }) => {
	const postList = posts.map(post => <Post {...post} />);
	return (
		<div>
			{postList}
		</div>
	);
};
export default managePosts(BlogPosts);
