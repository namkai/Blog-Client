import React, { PureComponent } from 'react';
import managePosts from './hoc/manage_posts';
import Post from './post';
import PostHeader from './post_header';
import Searchbar from './search_bar';
import PostShow from './show_post';
import Loading from './loading';

class BlogPosts extends PureComponent {
	componentWillMount() {
		this.props.fetchPosts();
	}
	render() {
		const { posts, selectPost, deletePost  } = this.props;
		let list = null;
		let header = null;
		if (list === null) {
			list = <Loading />;
		}
		if (posts.length === 1) {
			header = <PostHeader {...posts[0]} selectPost={selectPost} deletePost={deletePost}/>
			list = <PostShow {...posts[0]} selectPost={selectPost}/>;
		} else {
			header = <Searchbar />
			list = posts.map(post => <Post {...post} selectPost={selectPost}/>);
		}
		return (
			<div className="container pt-4">
				<div className="row">
					<div className="col-lg-3">
					</div>
					<div className="col-lg-6">
						<ul className="list-group media-list media-list-stream mb-4">
							{ header }
							{ list }
						</ul>
					</div>
				</div>
			</div>
		);
	};
}

export default managePosts(BlogPosts);
