import React from 'react';
import { Link } from 'react-router-dom';

const PostsShow = ({ title, body, selectPost }) => (
	<div>
		<Link to="/" onClick={() => selectPost('')}>Back to Index</Link>
		<h3>{title}</h3>
		<p>{body}</p>
	</div>
);


export default PostsShow;
