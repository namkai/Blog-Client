import React from 'react';
import BlogPostLayout from './layout/BlogPostLayout';
import Loading from './loading';
import Post from './post';
import PostHeader from './post_header';
import PostShow from './show_post';
import SearchBar from './search_bar';
import ProfileCard from './profile_card';

const BlogPosts = ({ posts, selectPost, deletePost, addComment, user, query, updateQuery }) => {
	let list = null;
	let header = null;

	if (list === null) {
		list = <Loading />;
	}
	if (posts.length === 1) {
		header = <PostHeader {...posts[0]} selectPost={selectPost} deletePost={deletePost}/>;
		list = <PostShow {...posts[0]} selectPost={selectPost} addComment={addComment}/>;
	} else if (posts.length > 1) {
		list = posts.map(post => <Post {...post} selectPost={selectPost}/>);
	}
	return (
		<BlogPostLayout card={<ProfileCard {...user} />}>
			<SearchBar query={query} updateQuery={updateQuery} />
			{ header }
			{ list }
		</BlogPostLayout>
	);
};

export default BlogPosts;
