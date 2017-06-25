import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import BlogPosts from '../../components/scenes/AllBlogPosts/index';

import * as actions from '../actions/post_actions';
import { getUserData } from '../actions/authentication_actions';
import { updateQuery } from '../actions/query_actions';
import getAllPosts from '../selectors/all_posts_selector';

const mapStateToProps = (state, ownProps) => ({
	posts: getAllPosts(state),
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
