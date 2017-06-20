import React from 'react';
import Header from './header';
import manageUser from './hoc/manage_user';

const App = ({user}) => (
	<div>
		<Header />
		{user.name}
	</div>
);

export default manageUser(App);
