import React from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';
import CommentInput from './comment_input';

const BlogPostBody = ({ title, body, image, comments, _id, createComment, user, date }) => {
	let commentList = null;
	if (comments.length > 0) {
		commentList = comments.map(comment => <Comment {...comment} />);
	}
	console.log(`i'm the comments!`, comments);
	return (
		<li className="media list-group-item p-4">
			<img
				className="media-object d-flex align-self-start mr-3"
				src={image}
			/>
			<div className="media-body">
				<div className="media-body-text">
					<div className="media-heading">
						<small className="float-right text-muted">{ date }</small>
						<h6>{title}</h6>
					</div>
					<p>
						{body}
					</p>
					<ul className="media-list">
						{commentList}
						<CommentInput postId={_id} createComment={createComment} user={user}/>
					</ul>
				</div>
			</div>
		</li>
	);
};

BlogPostBody.defaultProps = {
	title: '',
	body: '',
	image: '',
	comments: [],
	_id: '',
	user: {},
	date: '',
	createComment: PropTypes.func,
};

BlogPostBody.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	image: PropTypes.string,
	comments: PropTypes.arrayOf(PropTypes.object),
	_id: PropTypes.string,
	user: PropTypes.object,
	date: PropTypes.string,
	createComment: PropTypes.func,
};

export default BlogPostBody;
