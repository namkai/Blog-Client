import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../style/profile.css';

export const ProfileLayout = ({ name, backgroundPhoto, profilePhoto, children }) => (
	<div className="profile-header text-center" style={{ backgroundImage: `url(${backgroundPhoto})` }}>
		<div className="container-fluid">
			<div className="container-inner">
				<img className="rounded-circle media-object" src={profilePhoto}/>
				<h3 className="profile-header-user">{name}</h3>
				<p className="profile-header-bio">Check out my blog posts</p>
			</div>
		</div>
		<nav className="profile-header-nav">
			<ul className="nav nav-tabs justify-content-center">
				<li className="nav-item active">
					<Link className="nav-link" to="/profile/posts">Blog Posts</Link>
				</li>
			</ul>
		</nav>
		{children}
	</div>
);

ProfileLayout.defaultProps = {
	name: '',
	backgroundPhoto: '',
	profilePhoto: '',
	children: [],
};

ProfileLayout.defaultProps = {
	name: PropTypes.string,
	backgroundPhoto: PropTypes.string,
	profilePhoto: PropTypes.string,
	children: PropTypes.array,
};

export default ProfileLayout;
