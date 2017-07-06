import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Body } from '../body';

it('renders correctly', () => {
	const body = shallow(
		<Body />
	);
	expect(toJson(body)).toMatchSnapshot();
});