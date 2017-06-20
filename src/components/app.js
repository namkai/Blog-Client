import React from 'react';
import Header from './header';
import manageUser from './hoc/manage_user';

const App = ({user}) => (
	<div className="with-top-navbar">
		<Header />
	</div>
);

export default manageUser(App);
