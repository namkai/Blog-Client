import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions/authentication_actions';
import renderInput from '../renderInput';

const Signin = ({ handleSubmit, signinUser, auth: { error } }) => {
	const renderAlert = () => {
		if (error) {
			return (
				<div className="alert alert-danger">
					<strong>Ooops!</strong> {error}
				</div>
			);
		}
	};

	return (
		<form onSubmit={handleSubmit(user => signinUser(user))}>
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
			<button action="submit" className="btn btn-primary">Sign in</button>
		</form>
	);
};

export default connect(({ auth }) => ({ auth }), actions)(reduxForm({ form: 'signin' })(Signin));

