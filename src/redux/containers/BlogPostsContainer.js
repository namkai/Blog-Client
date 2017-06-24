import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import BlogPosts from '../../components/blog_posts';

import * as actions from '../actions/post_actions';
import { getUserData } from '../actions/authentication_actions';
import { updateQuery } from '../actions/query_actions';
import getFilteredPostState from '../selectors/selected_post';

const mapStateToProps = (state, ownProps) => ({
	posts: getFilteredPostState(state),
	user: state.user,
	query: state.query,
});

const connectToStore = connect(mapStateToProps, { ...actions, getUserData, updateQuery });

const onDidMount = lifecycle({
	componentDidMount() {
		this.props.fetchPosts();
		this.props.getUserData();
	},
});

export default compose(connectToStore, onDidMount)(BlogPosts);
