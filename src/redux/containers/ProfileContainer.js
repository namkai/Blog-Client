import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import { getUserData } from '../actions/authentication_actions';
import Profile from '../../components/scenes/profile/index';

const mapStateToProps = state => ({
	user: state.user,
});

const connectToStore = connect(mapStateToProps, { getUserData });

const onDidMount = lifecycle({
	componentDidMount() {
		if (Object.keys(this.props.user).length === 0) {
			const token = localStorage.getItem('token');
			this.props.getUserData(token);
		}
	},
});

export default compose(connectToStore, onDidMount)(Profile);
