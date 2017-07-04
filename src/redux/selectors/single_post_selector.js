import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';
import * as schema from '../normalizr/entities';

const selectedPost = (state, props) => props.match.params.id;

const entitiesSelector = state => state.entities;

const getSinglePost = (selected, entities) => denormalize(selected, schema.post, entities);

export default createSelector(
	selectedPost,
	entitiesSelector,
	getSinglePost,
);

