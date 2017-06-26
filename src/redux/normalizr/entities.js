import { schema } from 'normalizr';

const author = new schema.Entity('authors');

export const post = new schema.Entity('posts', {
	author,
	comments: [ new schema.Entity('comments', {
		author,
	}, { idAttribute: '_id' })],
}, {idAttribute: '_id'});

export const arrayOfPosts = new schema.Array(post);