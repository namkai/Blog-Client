import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ id, title, image, body, description, author }) => (
	<li className="list-group-item" key={id}>
		<Link to={'posts/' + id}>
			<span className="pull-right">{body}</span>
			<strong>{title}</strong>
		</Link>
	</li>
);

export default Post;
