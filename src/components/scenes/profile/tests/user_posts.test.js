import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { UserPosts } from '../user_posts';

it('renders correctly', () => {
	const userposts = shallow(
		<UserPosts />,
	);
	expect(toJson(userposts)).toMatchSnapshot();
});
