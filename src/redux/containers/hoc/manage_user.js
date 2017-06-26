import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/authentication_actions';

export default function (ComposedComponent) {
	class UserManager extends PureComponent {
		componentWillMount() {
			const token = localStorage.getItem('token');
			if (Object.keys(this.props.user).length === 0) {
				this.props.getUserData(token);
			}
		}

		render() {
			return (
				<ComposedComponent {...this.props} />
			);
		}
	}
	return connect(({ user }) => ({ user }), actions)(UserManager);
}
