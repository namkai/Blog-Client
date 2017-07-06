import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Profile } from '../index';

it('renders correctly', () => {
	const profile = shallow(
		<Profile />
	);
	expect(toJson(profile)).toMatchSnapshot();
});