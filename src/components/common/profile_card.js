import React from 'react';
import { Link } from 'react-router-dom';

export const ProfileCard = ({ profilePhoto, backgroundPhoto, name }) => (
	<div className="card card-profile mb-4">
		<div className="card-header" style={ { backgroundImage: `url(${backgroundPhoto})` } }/>
		<div className="card-block text-center">
			<Link to="/profile/posts">
				<img
					className="card-profile-img"
					src={profilePhoto}
				/>
			</Link>

			<h6 className="card-title">
				<a className="text-inherit" href="profile/index.html">{name}</a>
			</h6>

			{/*<p className="mb-4">{bio}</p>*/}

			<ul className="card-menu">
				<li className="card-menu-item">
					<a href="#odal" className="text-inherit" data-toggle="modal">
						Blog Posts
						<h6 className="my-0">10</h6>
					</a>
				</li>
			</ul>
		</div>
	</div>
);

export default ProfileCard;
