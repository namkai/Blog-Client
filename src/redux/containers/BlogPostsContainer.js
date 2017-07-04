import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import BlogPosts from '../../components/scenes/AllBlogPosts/index';
import { getUserData } from '../actions/authentication_actions';
import * as actions from '../actions/post_actions';
import { updateQuery } from '../actions/query_actions';
import getAllPosts from '../selectors/all_posts_selector';
import getAllQueriedPosts from '../selectors/selected_query_posts';

import { findEntities } from '../thunks/crud/find';

const mapStateToProps = (state, ownProps) => ({
	posts: getAllQueriedPosts(state),
	user: state.user,
	query: state.query,
});

const connectToStore = connect(mapStateToProps, { ...actions, getUserData, updateQuery, findEntities });

const onDidMount = lifecycle({
	componentDidMount() {
		if (Object.keys(this.props.posts).length === 0) {
			this.props.findEntities('posts');
		}
		if (Object.keys(this.props.user).length === 0) {
			const token = localStorage.getItem('token');
			this.props.getUserData(token);
		}
	},
});

export default compose(connectToStore, onDidMount)(BlogPosts);