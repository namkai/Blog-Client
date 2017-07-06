import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// import '../../../style/post.css';

export const Post = ({ _id, title, image, description, author, selectPost }) => (
	<li className="media list-group-item p-4 post" onClick={() => selectPost(_id)}>
		<img
			className="media-object d-flex align-self-start mr-3"
			src={image}
		/>
		<div className="media-body">
			<div className="media-body-text" style={{ width: '100%' }}>
				<div className="media-heading">
					<small className="float-right text-muted">{ author.name }</small>
					<Link to={`posts/${_id}`} onClick={() => selectPost(_id)}><h6>{title}</h6></Link>
				</div>
				<p>
					{description}
				</p>
			</div>
		</div>
	</li>
);

Post.defaultProps = {
	_id: PropTypes.string,
	title: '',
	image: 'http://www.bolton-associates.co.uk/wp-content/uploads/2015/10/analytics-programming.png',
	description: 'This is the description',
	author: {},
	selectPost: PropTypes.func,
};

Post.propTypes = {
	_id: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.string,
	description: PropTypes.string,
	author: PropTypes.object,
	selectPost: PropTypes.func,
};
export default Post;
