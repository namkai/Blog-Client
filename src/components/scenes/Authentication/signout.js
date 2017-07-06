import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/authentication_actions';

export class Signout extends PureComponent {
	componentWillMount() {
		this.props.signoutUser();
	}

	render() {
		return (
			<div>Sorry to see you go...</div>
		);
	}
}
Signout.defaultProps = {
	signoutUser: PropTypes.func,
};
Signout.propTypes = {
	signoutUser: PropTypes.func,
};


export default connect(null, actions)(Signout);
