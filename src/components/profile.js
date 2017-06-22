import React from 'react';
import manageUser from './hoc/manage_user';
import '../style/profile.css';

const Profile = ({ user }) => {
	return (
		<div className="profile-header text-center" style={{ backgroundImage: `url(${ user.backgroundPhoto })` }}>
			<div className="container-fluid">
				<div className="container-inner">
					<img className="rounded-circle media-object" src={user.profilePhoto}/>
					<h3 className="profile-header-user">{user.name}</h3>
					<p className="profile-header-bio">Check out my blog posts</p>
				</div>
			</div>
			<nav className="profile-header-nav">
				<ul className="nav nav-tabs justify-content-center">
					<li className="nav-item active">
						<a className="nav-link" href="#">Blog Posts</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default manageUser(Profile);