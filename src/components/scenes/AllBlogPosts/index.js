import React from 'react';
import BlogPostLayout from './blog_post_layout';
import Loading from '../../common/loading';
import Post from './post';
import PostHeader from '../SingleBlogPost/post_header';
import PostShow from '../SingleBlogPost/index';
import SearchBar from './search_bar';
import ProfileCard from '../../common/profile_card';

const BlogPosts = ({ posts, selectPost, deletePost, addComment, user, query, updateQuery }) => {
	let list = null;
	let header = null;

	if (list === null) {
		list = <Loading />;
	}
	if (posts.length === 1) {
//		header = <PostHeader {...posts[0]} selectPost={selectPost} deletePost={deletePost}/>;
//		list = <SingleBlogPost {...posts[0]} selectPost={selectPost} addComment={addComment} user={user} />;
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
