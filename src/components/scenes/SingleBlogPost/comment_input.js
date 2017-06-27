import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderInput from '../../common/renderInput';


const CommentInput = ({ handleSubmit, user, addComment, postId }) => {
	console.log(user, `i'm the user`)
	const onSubmit = (comment) => {
		const newComment = {
			postId,
			author: {
				_id: user._id,
				name: user.name,
				profilePhoto: user.profilePhoto,
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
				{/*<label htmlFor="">Add a comment:</label>*/}
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