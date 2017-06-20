import React from 'react';
import { connect } from 'react-redux';
import { updateQuery } from '../actions/query_actions';

export const Searchbar = ({ query, updateQuery }) =>
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

export default connect(({ query }) => ({ query }), { updateQuery })(Searchbar);
