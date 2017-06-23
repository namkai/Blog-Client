import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import BlogPosts from '../../components/blog_posts';

import * as actions from '../actions/post_actions';
import getFilteredPostState from '../selectors/selected_post';

const mapStateToProps = (state, ownProps) => ({
	posts: getFilteredPostState(state),
});

const connectToStore = connect(mapStateToProps, actions);

const onDidMount = lifecycle({
	componentDidMount() {
		this.props.fetchPosts();
	},
});

export default compose(connectToStore, onDidMount)(BlogPosts);
