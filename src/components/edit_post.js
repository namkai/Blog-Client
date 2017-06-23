import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { history } from '../index';
import managePost from '../redux/hoc/manage_posts';
import manageUser from '../redux/hoc/manage_user';
import renderInput from './renderInput';

const EditPost = (props) => {
	const editExistingPost = (post) => {
		const newPost = {
			...post,
			author: {
				name: props.posts[0].author.name,
				id: props.posts[0].author.id,
			},
		};
		props.editPost(newPost);
		history.push('/');
	};
	return (
		<div style={style.formContainer}>
			<form onSubmit={props.handleSubmit(post => editExistingPost(post))}
			      style={{ width: '800px', marginTop: '50px' }}>
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
				<button className="btn btn-secondary"><Link to="/">Go Back</Link></button>
				<span>   </span>
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

export default reduxForm({ form: 'newpost' })(manageUser(managePost(EditPost)));
