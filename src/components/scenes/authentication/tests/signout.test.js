import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Signout } from '../signout';

it('renders correctly', () => {
	const signout = shallow(
		<Signout />
	);
	expect(toJson(signout)).toMatchSnapshot();
});