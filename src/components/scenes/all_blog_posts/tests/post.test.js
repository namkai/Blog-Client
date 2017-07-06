import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Post } from '../post';

it('renders correctly', () => {
	const post = shallow(
		<Post />
	);
	expect(toJson(post)).toMatchSnapshot();
});