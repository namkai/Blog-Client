import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions/post_actions';
import renderInput from './renderInput';

const CreatePost = ({ handleSubmit, createPost }) => {
	return (
		<form onSubmit={handleSubmit(user => createPost(user))}>
			<fieldset className="form-group">
				<label>Title:</label>
				<Field
					name="title"
					type="text"
					component={renderInput}
				/>
			</fieldset>
			<fieldset className="form-group">
				<label>Image:</label>
				<Field
					name="image"
					type="text"
					component={renderInput}
				/>
			</fieldset>
			<fieldset className="form-group">
				<label>Description:</label>
				<Field
					name="description"
					type="text"
					component={renderInput}
				/>
			</fieldset>
			<fieldset className="form-group">
				<label>Body:</label>
				<Field
					name="body"
					type="text"
					component={renderInput}
				/>
			</fieldset>
			<button action="submit" className="btn btn-primary">Submit Post!</button>
		</form>
	);
};

export default connect(null, actions)(reduxForm({ form: 'newpost' })(CreatePost));
