import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { SearchBar } from '../search_bar';

it('renders correctly', () => {
	const searchbar = shallow(
		<SearchBar />
	);
	expect(toJson(searchbar)).toMatchSnapshot();
});