import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import SingleBlogPost from '../../components/scenes/SingleBlogPost';
import { getUserData } from '../actions/authentication_actions';

import * as actions from '../actions/post_actions';
import singlePostSelector from '../selectors/single_post_selector';

const mapStateToProps = (state, ownProps) => ({
	post: singlePostSelector(state)
});

const connectToStore = connect(mapStateToProps, actions);

const onDidMount = lifecycle({
	componentWillMount() {
		if (this.props.post.length === 0) {
			console.log(`i'm hit!`)
			this.props.fetchPost(this.props.match.params.id);
		}
	},
});

export default compose(connectToStore, onDidMount)(SingleBlogPost);
