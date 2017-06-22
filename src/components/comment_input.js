import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderInput from './renderInput';


const CommentInput = ({ handleSubmit, author, addComment, postId }) => {
	const onSubmit = (comment) => {
		console.log(comment)
		const newComment = {
			postId,
			author: {
				_id: author._id,
				name: author.name,
				profilePhoto: author.profilePhoto,
			},
			comment: {
				text: comment.comment,
			},
		};
		addComment(newComment);
	};
	return (
		<form onSubmit={handleSubmit(comment => onSubmit(comment))}>
			<fieldset className="form-group">
				<label htmlFor="">Add a comment:</label>
				<Field
					name="comment"
					type="text"
					component={renderInput}
				/>
			</fieldset>
			<button>Add Comment</button>
		</form>
	);
};

export default reduxForm({ form: 'comment' })(CommentInput);