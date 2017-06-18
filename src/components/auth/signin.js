import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderInput from '../renderInput';

const Signin = ({ handleSubmit }) => (
	<form onSubmit={handleSubmit(({ email, password }) => console.log(email))}>
		<fieldset className="form-group">
			<label htmlFor="">Email:</label>
			<Field
				name="email"
				type="text"
				component={renderInput}
			/>
		</fieldset>
		<fieldset className="form-group">
			<label htmlFor="">Password:</label>
			<Field
				name="password"
				type="text"
				component={renderInput}
			/>
		</fieldset>
		<button action="submit" className="btn btn-primary">Sign in</button>
	</form>
);


export default reduxForm({ form: 'signin' })(Signin);
