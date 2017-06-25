import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import logo from '../../style/v4/docs/assets/img/brand-white.png';


const Navbar = ({ authenticated }) => {
	const renderLinks = () => {
		if (authenticated) {
			return [
				<li className="nav-item" key={1}>
					<NavLink className="nav-link" to="/signout">Sign Out</NavLink>
				</li>
			];
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
		<nav className="navbar navbar-toggleable-sm fixed-top navbar-inverse bg-primary app-navbar">
			<button
				className="navbar-toggler navbar-toggler-right hidden-md-up"
				type="button"
				data-toggle="collapse"
				data-target="#navbarResponsive"
				aria-controls="navbarResponsive"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"/>
			</button>

			<NavLink className="navbar-brand" to="/">
				<img src={ logo } alt="brand" style={ { height: 23 } }/>
			</NavLink>

			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item" key={2}>
						<NavLink className="nav-link" to="/createpost">New Post</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/profile/posts">Profile</NavLink>
					</li>
					<li className="nav-item hidden-md-up">
						<a className="nav-link" href="login/index.html">Logout</a>
					</li>
				</ul>

				<ul id="#js-popoverContent" className="nav navbar-nav float-right mr-0 hidden-sm-down">
					<li className="nav-item ml-2">
						{renderLinks()}
					</li>
				</ul>

				<ul className="nav navbar-nav hidden-xs-up" id="js-popoverContent">
					<li className="nav-item"><a className="nav-link" href="#" data-action="growl">Growl</a></li>
					<li className="nav-item"><a className="nav-link" href="login/index.html">Logout</a></li>
				</ul>
			</div>
		</nav>
	);
};

export default connect(({ auth: { authenticated } }) => ({ authenticated }))(Navbar);
