import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { PostCard } from '../post_card';

it('renders correctly', () => {
	const postcard = shallow(
		<PostCard />
	);
	expect(toJson(postcard)).toMatchSnapshot();
});