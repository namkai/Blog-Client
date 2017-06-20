import React from 'react';
import manageUser from './hoc/manage_user';

const Profile = ({ user }) => {
	return (
		<div>Profile</div>
	);
};

export default manageUser(Profile);