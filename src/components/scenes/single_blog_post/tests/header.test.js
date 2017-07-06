import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Header } from '../header';

it('renders correctly', () => {
	const header = shallow(
		<Header />
	);
	expect(toJson(header)).toMatchSnapshot();
});