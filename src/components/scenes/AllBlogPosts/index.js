import React from 'react';
import Loading from '../../common/loading';
import ProfileCard from '../../common/profile_card';
import BlogPostLayout from './layout';
import Post from './post';
import SearchBar from './search_bar';

const BlogPosts = ({ posts, selectPost, deletePost, addComment, user, query, updateQuery }) => {
	let list = null;

	if (list === null) {
		list = <Loading />;
	}
	if (posts.length >= 1) {
		list = posts.map(post => <Post {...post} selectPost={selectPost} />);
	}
	return (
		<BlogPostLayout card={<ProfileCard {...user} />}>
			<SearchBar query={query} updateQuery={updateQuery}/>
			{ list }
		</BlogPostLayout>
	);
};

export default BlogPosts;
