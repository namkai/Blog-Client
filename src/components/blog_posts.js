import React from 'react';
import managePosts from './hoc/manage_posts';
import Post from './post';
import Searchbar from './search_bar';
import PostShow from './show_post';

export const BlogPosts = ({ posts, selectPost }) => {
	const postList = posts.map(post => <Post {...post} selectPost={selectPost}/>);
	const displayedContent = () => {
		if (posts.length === 1) {
			return (
				<PostShow {...posts[0]} selectPost={selectPost}/>
			);
		}
		return (
			<div>
				{postList}
			</div>
		);
	};
	return (
		<div className="container pt-4">
			<div className="row">
				<div className="col-lg-3">
				</div>
				<div className="col-lg-6">
					<ul className="list-group media-list media-list-stream mb-4">
						<Searchbar/>
						{displayedContent()}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default managePosts(BlogPosts);
