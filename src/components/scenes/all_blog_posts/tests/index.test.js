import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { BlogPosts } from '../index';

it('renders correctly', () => {
	const blogposts = shallow(
		<BlogPosts />
	);
	expect(toJson(blogposts)).toMatchSnapshot();
});