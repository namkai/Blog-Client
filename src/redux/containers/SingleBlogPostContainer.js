import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import SingleBlogPost from '../../components/scenes/SingleBlogPost';
import { getAuthor } from '../actions/author_actions';

import * as actions from '../actions/post_actions';
import singlePostSelector from '../selectors/single_post_selector';

const mapStateToProps = (state, ownProps) => ({
	post: singlePostSelector(state),
	author: state.selectedPost.author,
});

const connectToStore = connect(mapStateToProps, { ...actions, getAuthor});

const onDidMount = lifecycle({
	componentWillMount() {
		if (this.props.post.length === 0) {
			console.log(`i'm hit!`)
			this.props.fetchPost(this.props.match.params.id);
		}
		this.props.getAuthor(this.props.post.author.id);
	},
});

export default compose(connectToStore, onDidMount)(SingleBlogPost);
