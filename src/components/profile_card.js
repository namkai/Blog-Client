import React from 'react';
import { Link } from 'react-router-dom';
import manageUser from '../redux/hoc/manage_user';

export const ProfileCard = ({ user }) => (
	<div className="card card-profile mb-4">
		<div className="card-header" style={ { backgroundImage: `url(${ user.backgroundPhoto })` } }/>
		<div className="card-block text-center">
			<Link to="/profile/posts">
				<img
					className="card-profile-img"
					src={ user.profilePhoto }
				/>
			</Link>

			<h6 className="card-title">
				<a className="text-inherit" href="profile/index.html">{user.name}</a>
			</h6>

			{/*<p className="mb-4">{user.bio}</p>*/}

			<ul className="card-menu">
				<li className="card-menu-item">
					<a href="#userModal" className="text-inherit" data-toggle="modal">
						Blog Posts
						<h6 className="my-0">10</h6>
					</a>
				</li>
			</ul>
		</div>
	</div>
);

export default manageUser(ProfileCard);
