import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { history } from '../index';
import managePost from '../redux/hoc/manage_posts';
import manageUser from '../redux/hoc/manage_user';
import renderInput from './renderInput';

class EditPost extends PureComponent {
	componentWillMount() {
		if (this.props.posts.length === 0) {
			history.push('/');
		}
		this.props.initialize({ ...this.props.posts[0] });
	}

	editExistingPost = (post) => {
		const newPost = {
			...post,
			author: {
				name: this.props.posts[0].author.name,
				id: this.props.posts[0].author.id,
			},
		};
		this.props.editPost(newPost);
		history.push('/');
	};

	render() {
		return (
			<div style={style.formContainer}>
				<form onSubmit={this.props.handleSubmit(post => this.editExistingPost(post))}
				      style={{ width: '800px', marginTop: '50px' }}>
					<fieldset className="form-group">
						<label>Title:</label>
						<Field
							name="title"
							type="text"
							component={renderInput}
						/>
					</fieldset>
					<fieldset className="form-group">
						<label>Image:</label>
						<Field
							name="image"
							type="text"
							component={renderInput}
						/>
					</fieldset>
					<fieldset className="form-group">
						<label>Description:</label>
						<Field
							name="description"
							type="text"
							component={renderInput}
						/>
					</fieldset>
					<fieldset className="form-group">
						<label>Body:</label>
						<Field
							name="body"
							type="textarea"
							component={renderInput}
						/>
					</fieldset>
					<button className="btn btn-secondary"><Link to="/">Go Back</Link></button>
					<span>   </span>
					<button action="submit" className="btn btn-primary">Submit Post!</button>
				</form>
			</div>
		);
	};
}

const style = {
	formContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
	},
};

export default reduxForm({ form: 'newpost' })(manageUser(managePost(EditPost)));
