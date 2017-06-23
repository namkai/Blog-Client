import React from 'react';
import Loading from './loading';
import PostCard from './post_card';

const UserPosts = ({ posts }) => {
	let postList = null;
	if (postList === null) {
		postList = <Loading />;
	}
	if ( posts.length > 0 ) {
		postList = posts.map(post => <PostCard {...post} />);
	}
	return (
		<div>{postList}</div>
	);
};

export default UserPosts;
