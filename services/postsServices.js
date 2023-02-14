import { addPost, getPosts } from "../model/postsModel.js";

export const getPostsServices = async (userInfo) => {
     const posts = await getPosts(userInfo);

     if (posts.length === 0) return { type: 'NOTHING_POSTS_FOUND', message: 'Nothing posts found.' };

     return { type: null, message: posts };
};

export const addPostServices = async (post_content, img, userId) => {
     if (!post_content) return { type: 'MISSING_DATA', message: 'Post content is required.' };

     await addPost(post_content, img, userId);

     return { type: null, message: 'Post has been created!' };
};