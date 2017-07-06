import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { ProfileLayout } from '../layout';

it('renders correctly', () => {
	const layout = shallow(
		<ProfileLayout />,
	);
	expect(toJson(layout)).toMatchSnapshot();
});
