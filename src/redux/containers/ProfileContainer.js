import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import * as actions from '../actions/post_actions';
import { getUserData } from '../actions/authentication_actions';
import Profile from '../../components/profile';

const mapStateToProps = state => ({
	user: state.user,
});

const connectToStore = connect(mapStateToProps, actions);

const onDidMount = lifecycle({
	componentDidMount() {
		const token = localStorage.getItem('token');
		if (Object.keys(this.props.user).length === 0) {
			this.props.getUserData(token);
		}
	},
});

export default compose(connectToStore)(Profile);
