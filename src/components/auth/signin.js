import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../redux/actions/authentication_actions';
import renderInput from '../renderInput';
import logo from '../../style/v4/docs/assets/img/brand.png';

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
		<div className="container-fluid container-fill-height">
			<div className="container-content-middle">
				{/*<a href="../index.html" className="app-brand mb-5">*/}
					{/*<img src={ logo } alt="brand" style={ { height: 30, marginBottom: 20 } }/>*/}
				{/*</a>*/}
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

export default connect(({ auth }) => ({ auth }), actions)(reduxForm({ form: 'signin' })(Signin));

