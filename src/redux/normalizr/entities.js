import { schema } from 'normalizr';

const author = new schema.Entity('authors');

export const comments = new schema.Entity('comments', { author }, { idAttribute: '_id' });

export const post = new schema.Entity('posts', {
	author,
	comments: [comments],
}, { idAttribute: '_id' });

export const array_of_posts = new schema.Array(post);