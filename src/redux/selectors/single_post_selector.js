import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';
import * as schema from '../normalizr/entities';

const selectedPostSelector = state => state.selectedPost.post;
const entitiesSelector = state => state.entities;

const getSinglePosts = (selected, entities) => denormalize(selected, schema.post, entities);

export default createSelector(
	selectedPostSelector,
	entitiesSelector,
	getSinglePosts,
);

