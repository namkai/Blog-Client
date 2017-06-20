import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/post_actions';

export default function (ComposedComponent) {
	class PostsManager extends PureComponent {
		componentWillMount() {
			this.props.fetchPosts();
		}

		render() {
			return (
				<ComposedComponent {...this.props} />
			);
		}
	}

	return connect(({ posts }) => ({ posts }), actions)(PostsManager);
}
