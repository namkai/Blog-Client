import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { CommentInput } from '../comment_input';

it('renders correctly', () => {
	const commentinput = shallow(
		<CommentInput />
	);
	expect(toJson(commentinput)).toMatchSnapshot();
});