import { arrayOf, Schema } from 'normalizr';

// Here we create the normalizr schemas.  These define the entity names
// (entities.posts, for example) and how we get the ID for each entity.
//
// We could define a function for idAttribute which returns a key (such as
// combining two fields).
const postSchema = new Schema('posts', { idAttribute: 'id' });
const arrayOfPosts = arrayOf(postSchema);
const postAuthorSchema = new Schema('postAuthors', { idAttribute: 'id' });
const commentSchema = new Schema('comments', { idAttribute: 'id' });
const CommentAuthorSchema = new Schema('commentAuthors', { idAttribute: 'id' });

// Here we define relationships between each resource/schema/entity
// (or whatever you feel like calling them these days)

// The post resource in our API response has an author and comments as children
postSchema.define({
	author: postAuthorSchema,
	comments: arrayOf(commentSchema),
});

// Each comment has an author
commentSchema.define({
	author: CommentAuthorSchema,
});

