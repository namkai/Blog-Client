import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import SingleBlogPost from '../../components/scenes/SingleBlogPost';
import { getAuthor } from '../actions/author_actions';

import * as actions from '../actions/post_actions';
import singlePostSelector from '../selectors/single_post_selector';
import { fetchEntity } from '../thunks/crud/fetch';

const mapStateToProps = (state, ownProps) => ({
	post: singlePostSelector(state),
	author: state.selectedPost.author,
	user: state.user,
});

const connectToStore = connect(mapStateToProps, { ...actions, getAuthor, fetchEntity });

const onDidMount = lifecycle({
	componentWillMount() {
		this.props.selectPost(`${this.props.match.params.id}`);
		this.props.fetchEntity(this.props.match.params.id);
	},
});

export default compose(connectToStore, onDidMount)(SingleBlogPost);
