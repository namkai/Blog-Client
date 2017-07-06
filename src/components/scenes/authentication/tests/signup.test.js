import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Signup } from '../signup';

it('renders correctly', () => {
	const signup = shallow(
		<Signup />
	);
	expect(toJson(signup)).toMatchSnapshot();
});