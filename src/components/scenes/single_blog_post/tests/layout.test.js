import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { SingleBlogPostLayout } from '../layout';

it('renders correctly', () => {
	const layout = shallow(
		<SingleBlogPostLayout />
	);
	expect(toJson(layout)).toMatchSnapshot();
});