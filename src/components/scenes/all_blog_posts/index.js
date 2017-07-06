import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../../common/loading';
import ProfileCard from '../../common/profile_card';
import BlogPostLayout from './layout';
import Post from './post';
import SearchBar from './search_bar';

export const BlogPosts = ({ posts, selectPost, user, query, updateQuery }) => {
	let list = null;

	if (list === null) {
		list = <Loading />;
	}
	if (posts.length >= 1) {
		list = posts.map(post => <Post {...post} selectPost={selectPost} key={post._id} />);
	}
	return (
		<BlogPostLayout card={<ProfileCard {...user} />}>
			<SearchBar query={query} updateQuery={updateQuery} />
			{ list }
		</BlogPostLayout>
	);
};

BlogPosts.defaultProps = {
	posts: [],
	user: {},
	query: '',
	selectPost: PropTypes.func,
	updateQuery: PropTypes.func,
};

BlogPosts.propTypes = {
	posts: PropTypes.array,
	user: PropTypes.object,
	query: PropTypes.string,
	selectPost: PropTypes.func,
	updateQuery: PropTypes.func,
};

export default BlogPosts;
