import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Header = ({ authenticated }) => {
	const renderLinks = () => {
		if (authenticated) {
			return (
				<li className="nav-item">
					<NavLink className="nav-link" to="/signout">Sign Out</NavLink>
				</li>
			);
		}
		return [
			<li className="nav-item" key={1}>
				<NavLink to="/signin">Sign In</NavLink>
			</li>,
			<li className="nav-item" key={2}>
				<NavLink to="/signup">Sign Up</NavLink>
			</li>,
		];
	};
	return (
		<nav className="navbar navbar-light">
			<NavLink to="/" className="navbar-brand">Blog</NavLink>
			<ul className="nav navbar-nav">
				{renderLinks()}
			</ul>
		</nav>
	);
};

export default connect(({ auth: { authenticated } }) => ({ authenticated }))(Header);
