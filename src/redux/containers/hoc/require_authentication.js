import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
	class Authentication extends PureComponent {
		static contextTypes = {
			router: PropTypes.object
		};
		componentWillMount(){
			if(!this.props.authenticated)
				this.context.router.history.push('/signin')
		}
		componentWillUpdate(nextProps){
			if(!this.props.authenticated)
				this.context.router.history.push('/signin')
		}
		render() {
			return (
				<ComposedComponent {...this.props} />
			);
		}
	}

	return connect(({ auth: { authenticated } }) => ({ authenticated }))(Authentication);
}

