import PropTypes from 'prop-types';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderInput from '../../common/renderInput';


export const CommentInput = ({ handleSubmit, user, createComment, postId }) => {
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
		createComment(newComment);
	};
	return (
		<form onSubmit={handleSubmit(comment => onSubmit(comment))}>
			<fieldset className="form-group">
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

CommentInput.defaultProps = {
	handleSubmit: PropTypes.func,
	user: {},
	createComment: PropTypes.func,
	postId: '',
};

CommentInput.defaultProps = {
	handleSubmit: PropTypes.func,
	user: PropTypes.object,
	createComment: PropTypes.func,
	postId: PropTypes.string,
};

export default reduxForm({ form: 'comment' })(CommentInput);
