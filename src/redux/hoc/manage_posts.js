import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/post_actions';
import postsSelector from '../selectors/selected_post';

export default function (ComposedComponent) {
	class PostsManager extends PureComponent {
		render() {
			return (
				<ComposedComponent {...this.props} />
			);
		}
	}

	const mapStateToProps = state => ({
		posts: postsSelector(state),
	});

	return connect(mapStateToProps, actions)(PostsManager);
}
