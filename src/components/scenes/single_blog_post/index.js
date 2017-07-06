import React from 'react';
import ProfileCard from '../../common/profile_card';
import SingleBlogPostLayout from './layout';
import BlogPostBody from './body';
import PostHeader from './header';

const SingleBlogPost = ({ post, author, user, selectPost, deletePost, createComment }) => (
	<SingleBlogPostLayout card={<ProfileCard {...author} />}>
		<PostHeader {...post} selectPost={selectPost} deletePost={deletePost} />
		<BlogPostBody {...post} user={user} createComment={createComment} />
  </SingleBlogPostLayout>
);

export default SingleBlogPost;
