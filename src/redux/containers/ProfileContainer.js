import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import * as actions from '../actions/post_actions';
import getFilteredUsersPosts from '../selectors/selected_users_posts';
import Profile from '../../components/profile';

const mapStateToProps = state => ({
	user: state.user,
});

const connectToStore = connect(mapStateToProps, actions);

//const onDidMount = lifecycle({
//	componentDidMount() {
//		this.props.fetchPosts();
//	},
//});

export default compose(connectToStore)(Profile);
