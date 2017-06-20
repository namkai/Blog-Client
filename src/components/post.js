import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ _id, title, image, body, description, author }) => (
	<li className="list-group-item" key={_id}>
		<Link to={'posts/' + _id}>
			<span className="pull-right">{body}</span>
			<strong>{title}</strong>
		</Link>
	</li>
);

export default Post;
