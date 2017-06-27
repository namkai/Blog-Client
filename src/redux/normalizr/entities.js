import { schema } from 'normalizr';

const author = new schema.Entity('authors');

//const comments = new schema.Entity('comments');

export const post = new schema.Entity('posts', {
	author,
	comments: [new schema.Entity('comments', {
		author,
	}, { idAttribute: '_id' })],
}, { idAttribute: '_id' });

export const array_of_posts = new schema.Array(post);
