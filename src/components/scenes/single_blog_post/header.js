import React from 'react';
import { Link } from 'react-router-dom';
import manageUser from '../../../redux/containers/hoc/manage_user';
import '../../../style/Postheader.css';

export const PostHeader = ({ _id, author, deletePost, user }) => {
	const currentUser = () => {
		if ( author !== undefined && author.id === user._id) {
			return (
				<div className="edit">
					<Link to={`/edit/${_id}`}>Edit</Link>
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
				<Link to="/">Back</Link>
				{currentUser()}
			</div>
		</li>
	);
};

export default manageUser(PostHeader);
