import React from 'react';
import '../style/post.css';

const Post = ({ _id, title, image, body, description, author, selectPost }) => (
	<li className="media list-group-item p-4" onClick={() => selectPost(_id)}>
		<img
			className="media-object d-flex align-self-start mr-3"
			src={image}/>
		<div className="media-body">
			<div className="media-body-text" style={{ width: '100%' }}>
				<div className="media-heading">
					<small className="float-right text-muted">{ author.name }</small>
					<h6>{title}</h6>
				</div>
				<p>
					{description}
				</p>
			</div>
		</div>
	</li>
);

export default Post;