import PropTypes from 'prop-types';
import React from 'react';
import Loading from '../../common/loading';
import PostCard from './post_card';

export const UserPosts = ({ posts }) => {
	let postList = <Loading />;

	if (posts.length > 0) {
		postList = posts.map(post => <PostCard {...post} />);
	}
	return (
		<div>{postList}</div>
	);
};

UserPosts.defaultProps = {
	posts: [],
};

UserPosts.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.object),
};


export default UserPosts;
