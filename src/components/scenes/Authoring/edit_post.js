import React from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import { history } from '../../../index';
import renderInput from '../../common/renderInput';

const EditPost = ({ post: { author, _id }, updateEntity, handleSubmit }) => {
	const editExistingPost = (post) => {
		const newPost = {
			...post,
			author: {
				name: author.name,
				id: author.id,
			},
		};
		updateEntity(newPost);
		history.push('/');
	};
	return (
		<div style={style.formContainer}>
			<form onSubmit={handleSubmit(post => editExistingPost(post))}
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
				<Link className="btn btn-secondary" to={`/posts/${_id}`}>Go Back</Link>
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

export default EditPost;
