import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { SingleBlogPost } from '../index';

it('renders correctly', () => {
	const singleblogpost = shallow(
		<SingleBlogPost />
	);
	expect(toJson(singleblogpost)).toMatchSnapshot();
});
