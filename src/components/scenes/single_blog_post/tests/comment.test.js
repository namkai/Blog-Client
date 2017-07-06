import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Comment } from '../comment';

it('renders correctly', () => {
	const comment = shallow(
		<Comment />
	);
	expect(toJson(comment)).toMatchSnapshot();
});