import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../../redux/actions/post_actions';
import { history } from '../../../index';
import manageUser from '../../../redux/containers/hoc/manage_user';
import requireAuth from '../../../redux/containers/hoc/require_authentication';
import renderInput from '../../common/renderInput';

const CreatePost = ({ handleSubmit, createEntity, user: { _id, name, profilePhoto } }) => {
	const createNewPost = (post) => {
		const newPost = {
			...post,
			author: {
				name,
				id: _id,
				profilePhoto,
			},
		};
		createEntity(newPost);
		history.push('/');
	};
	return (
		<div style={style.formContainer}>
			<form onSubmit={handleSubmit(user => createNewPost(user))} style={{width: '800px', marginTop: '50px'}}>
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
						type="textarea"
						component={renderInput}
					/>
				</fieldset>
				<button action="submit" className="btn btn-primary">Submit Post!</button>
			</form>
		</div>
	);
};

const style = {
	formContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
	},
};

export default CreatePost;
