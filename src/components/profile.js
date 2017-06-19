import React from 'react';
import { connect } from 'react-redux';

const Profile = (props) => {
	console.log(props)
	return (
		<div>Profile</div>
	);
};

export default connect()(Profile);