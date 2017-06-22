import React from 'react';

const Comment = (props) => {
	return (
		<li className="media">
			<img className="media-object mr-3 align-self-start" src="../assets/img/avatar-dhg.png"/>
			<div className="media-body">
				<strong>Dave Gamache: </strong>
				Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum
				faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus
				magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.
			</div>
		</li>
	);
};

export default Comment;
