import { schema } from 'normalizr';


const post = new schema.Entity('post', {
	author: new schema.Entity('postAuthor'),
	comments: [ new schema.Entity('comment', {
		author: new schema.Entity('commentAuthor'),
	}, { idAttribute: '_id' })],
}, {idAttribute: '_id'});

export const arrayOfPosts = new schema.Array(post);
