import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';
import * as schema from '../normalizr/entities';

const selectedPost = (state, props) => {
	console.log(`i'm the props`, props);
	return props.match.params.id;
};

const entitiesSelector = state => {
	console.log(state, `i'm the state! in the entities selector`);
	const entities = state.entities;
	return entities;
};

const getSinglePost = (selected, entities) => denormalize(selected, schema.post, entities);

export default createSelector(
	selectedPost,
	entitiesSelector,
	getSinglePost,
);

