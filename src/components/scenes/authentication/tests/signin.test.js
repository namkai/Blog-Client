import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Signin } from '../signin';

it('renders correctly', () => {
	const signin = shallow(
		<Signin />
	);
	expect(toJson(signin)).toMatchSnapshot();
});