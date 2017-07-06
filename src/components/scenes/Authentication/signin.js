import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../../redux/actions/authentication_actions';
import renderInput from '../../common/renderInput';

export const Signin = ({ handleSubmit, signinUser, auth: { error } }) => {
	const renderAlert = () => {
		if (error) {
			return (
				<div className="alert alert-danger">
					<strong>Ooops!</strong> {error}
				</div>
			);
		}
		return null;
	};
	return (
		<div className="container-fluid container-fill-height">
			<div className="container-content-middle">
				<form className="mx-auto text-center app-login-form" onSubmit={handleSubmit(user => signinUser(user))}>
					<fieldset className="form-group">
						<label htmlFor="">Email:</label>
						<Field
							name="email"
							type="email"
							component={renderInput}
						/>
					</fieldset>
					<fieldset className="form-group">
						<label htmlFor="">Password:</label>
						<Field
							name="password"
							type="password"
							component={renderInput}
						/>
					</fieldset>
					{ renderAlert() }
					<div className="mb-5">
						<button className="btn btn-primary" action="submit">Sign In</button>
						<button className="btn btn-secondary">Sign up</button>
					</div>
					<footer className="screen-login">
						<a href="#" className="text-muted">Forgot password</a>
					</footer>
				</form>
			</div>
		</div>
	);
};

Signin.defaultProps = {
	error: '',
	handleSubmit: PropTypes.func,
	signinUser: PropTypes.func,
};
Signin.propTypes = {
	handleSubmit: PropTypes.func,
	signinUser: PropTypes.func,
};

export default connect(({ auth }) => ({ auth }), actions)(reduxForm({ form: 'signin' })(Signin));

