import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';
import * as schema from '../normalizr/entities';

const selectedPost = (state, id) => id;

const entitiesSelector = state => {
	const entities = state.entities;
	return entities;
};

const getSinglePost = (selected, entities) => denormalize(selected, schema.post, entities);

export default createSelector(
	selectedPost,
	entitiesSelector,
	getSinglePost,
);

