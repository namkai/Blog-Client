import React from 'react';
import Navbar from './common/navbar';
import manageUser from '../redux/hoc/manage_user';

const App = ({user}) => (
	<div className="with-top-navbar">
		<Navbar />

	</div>
);

export default manageUser(App);
