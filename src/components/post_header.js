import React from 'react';
import { Link } from 'react-router-dom';
import manageUser from './hoc/manage_user';

const PostHeader = ({ _id, author, selectPost, deletePost, user }) => {
	const currentUser = () => {
		if (author.id === user._id) {
			return [
				<a href="#" onClick={() => deletePost(_id)}>Delete</a>,
				<Link to="/edit">Edit</Link>,
			];
		}
		return (
			<div />
		);
	};
	return (
		<li className="media list-group-item p-4">
			<div className="media-body">
				<a href="#" onClick={() => selectPost('')}>Back</a>
				{currentUser()}
			</div>
		</li>
	);
};

export default manageUser(PostHeader);
