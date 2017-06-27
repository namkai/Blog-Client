import { denormalize } from 'normalizr';
import * as schema from '../normalizr/entities';
import { createSelector } from 'reselect';

const resultSelector = state => state.entities.result;
const entitiesSelector = state => state.entities;

const getAllPosts = (result, entities) => denormalize(result, schema.arrayOfPosts, entities);

export default createSelector(
	resultSelector,
	entitiesSelector,
	getAllPosts,
);

