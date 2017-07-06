import PropTypes from 'prop-types';
import React from 'react';

export const SearchBar = ({ query, updateQuery }) =>
	<li className="media list-group-item p-4">
		<div className="input-group">
			<input
				type="text"
				placeholder="Search for a blog post"
				onChange={e => updateQuery(e.target.value)}
				value={query}
				className="form-control"
			/>
		</div>
	</li>;

SearchBar.defaultProps = {
	query: '',
	updateQuery: PropTypes.func,
};

SearchBar.propTypes = {
	query: PropTypes.string,
	updateQuery: PropTypes.func,
};

export default SearchBar;
