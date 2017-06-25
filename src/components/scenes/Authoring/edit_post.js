import React from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import { history } from '../../../index';
import renderInput from '../../common/renderInput';

const EditPost = ({ posts, editPost, handleSubmit }) => {
	const editExistingPost = (post) => {
		const newPost = {
			...post,
			author: {
				name: posts[0].author.name,
				id: posts[0].author.id,
			},
		};
		editPost(newPost);
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

export default EditPost;
