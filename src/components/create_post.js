import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

const CreatePost = (props) => {
	return (
		<div>Lets make a new post</div>
	);
};

export default connect()(reduxForm({form: 'newpost'})(CreatePost));
