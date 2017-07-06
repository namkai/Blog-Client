import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { CreatePost } from '../create_post';

it('renders correctly', () => {
	const createpost = shallow(
		<CreatePost />
	);
	expect(toJson(createpost)).toMatchSnapshot();
});