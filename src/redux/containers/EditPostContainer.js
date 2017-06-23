import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import EditPost from '../../components/edit_post';

import { history } from '../../index';
import * as actions from '../actions/post_actions';
import getFilteredPostState from '../selectors/selected_post';

const mapStateToProps = (state, ownProps) => ({
	posts: getFilteredPostState(state),
	user: state.user,
});

const connectToStore = connect(mapStateToProps, actions);

const onDidMount = lifecycle({
	componentDidMount() {
		if (this.props.posts.length === 0) {
			history.push('/');
		}
		if (this.props.posts.length > 0) {
			this.props.initialize({ ...this.props.posts[0] });
		}
	},
});

export default compose(connectToStore, onDidMount)(EditPost);
