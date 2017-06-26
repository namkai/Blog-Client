import React from 'react';
import ProfileCard from '../../common/profile_card';
import SingleBlogPostLayout from './single_blog_post_layout';
import BlogPostBody from './blog_post_body';
import PostHeader from './post_header';

const SingleBlogPost = ({ post, author, selectPost, deletePost }) => (
	<SingleBlogPostLayout card={ <ProfileCard { ...author } />}>
		<PostHeader {...post } selectPost={selectPost} deletePost={deletePost} />
		<BlogPostBody { ...post } />
	</SingleBlogPostLayout>
);


export default SingleBlogPost;