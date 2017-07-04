import React from 'react';
import Comment from './comment';
import CommentInput from './comment_input';

const BlogPostBody = ({ title, body, image, author, comments, _id, addComment, user, date }) => {
	let commentList = null;
	if(comments !== undefined) {
		commentList = comments.map(comment => <Comment {...comment} />);
	}
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
						<CommentInput postId={_id} addComment={addComment} user={user} />
					</ul>
				</div>
			</div>
		</li>
	);
};


export default BlogPostBody;
