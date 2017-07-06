import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { EditPost } from '../edit_post';

it('renders correctly', () => {
	const editpost = shallow(
		<EditPost />
	);
	expect(toJson(editpost)).toMatchSnapshot();
});