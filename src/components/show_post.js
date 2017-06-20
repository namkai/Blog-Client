import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions/post_actions';

class PostsShow extends Component {
	static contextTypes = {
		router: PropTypes.object,
	};

	componentWillMount() {
		console.log(this.props);
		let id = this.props.location.pathname.split('/')[2];
		this.props.fetchPost(id);
	}


	render() {
		const { post: { post} } = this.props;
		console.log(this.props, `i'm the showpost prosp!`)
		if (!post) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<Link to="/">Back to Index</Link>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return { post: state.posts };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
