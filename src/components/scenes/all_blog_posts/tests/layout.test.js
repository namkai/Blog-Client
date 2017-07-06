import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { BlogPostLayout } from '../layout';

it('Renders child components', () => {
	const blogpostlayout = shallow(
		<BlogPostLayout />,
	);
	expect(toJson(blogpostlayout)).toMatchSnapshot();
});
