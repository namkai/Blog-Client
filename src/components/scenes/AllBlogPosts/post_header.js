import React from 'react';
import { Link } from 'react-router-dom';
import manageUser from '../../../redux/hoc/manage_user';
import '../../../style/Postheader.css';

const PostHeader = ({ _id, author, selectPost, deletePost, user }) => {
	const currentUser = () => {
		if (author.id === user._id) {
			return (
				<div className="edit">
					<Link to="/edit">Edit</Link>
					<a href="#" onClick={() => deletePost(_id)}>Delete</a>
				</div>
			);
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
