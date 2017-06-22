import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions/authentication_actions';
import renderInput from '../renderInput';

const Signup = ({ handleSubmit, signupUser, auth: { error } }) => {
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
		<form onSubmit={handleSubmit(user => signupUser(user))}>
			<fieldset className="form-group">
				<label>Full Name:</label>
				<Field
					name="name"
					type="name"
					component={renderInput}
				/>
			</fieldset>
			<fieldset className="form-group">
				<label>Email:</label>
				<Field
					name="email"
					type="email"
					component={renderInput}
				/>
			</fieldset>
			<fieldset className="form-group">
				<label>Password:</label>
				<Field
					name="password"
					type="password"
					component={renderInput}
				/>
			</fieldset>
			<fieldset className="form-group">
				<label>Confirm Password:</label>
				<Field
					name="passwordConfirm"
					type="password"
					component={renderInput}
				/>
			</fieldset>
			<fieldset className="form-group">
				<label>Profile Picture:</label>
				<Field
					name="profilePhoto"
					type="link"
					component={renderInput}
				/>
			</fieldset>
			<fieldset className="form-group">
				<label>Background Photo:</label>
				<Field
					name="backgroundPhoto"
					type="link"
					component={renderInput}
				/>
			</fieldset>
			{renderAlert()}
			<button action="submit" className="btn btn-primary">Sign up!</button>
		</form>
	);
};

const validate = (values) => {
	const errors = {};
	if (values.passwordConfirm !== values.password) {
		errors.passwordConfirm = 'Passwords must match';
	}
	if (!values.password) {
		errors.password = 'Please enter a password';
	}
	if (!values.passwordConfirm) {
		errors.passwordConfirm = 'Please enter a password confirmation';
	}
	if (!values.name) {
		errors.name = 'Please enter your full name';
	}
	if (!values.email) {
		errors.email = 'Please enter an email';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}
	return errors;
};

export default connect(({ auth }) => ({ auth }), actions)(reduxForm({ form: 'signup', validate })(Signup));