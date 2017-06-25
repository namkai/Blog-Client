import { schema } from 'normalizr';

const author = new schema.Entity('author');

export const post = new schema.Entity('post', {
	author,
	comments: [ new schema.Entity('comment', {
		author,
	}, { idAttribute: '_id' })],
}, {idAttribute: '_id'});

export const arrayOfPosts = new schema.Array(post);