import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import * as actions from '../actions/post_actions';
import getFilteredUsersPosts from '../selectors/selected_users_posts';
import UserPosts from '../../components/scenes/Profile/user_posts';

const mapStateToProps = state => ({
	posts: getFilteredUsersPosts(state),
});

const onDidMount = lifecycle({
	componentDidMount() {
		if (this.props.posts.length === 0) {
			this.props.fetchPosts();
		}
	},
});

const connectToStore = connect(mapStateToProps, actions);


export default compose(connectToStore, onDidMount)(UserPosts);
