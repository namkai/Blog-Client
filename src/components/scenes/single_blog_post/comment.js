import React from 'react';

export const Comment = (props) => {
	return (
		<li className="media" style={{marginBottom: '10px'}}>
			<img className="media-object mr-3 align-self-start" src={props.author.profilePhoto} />
			<div className="media-body">
				<strong>{props.author.name.split(' ')[0]}: </strong>
				{props.text}
			</div>
		</li>
	);
};

export default Comment;
