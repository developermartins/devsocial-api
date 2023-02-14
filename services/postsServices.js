import { getPosts } from "../model/postsModel.js";

export const getPostsServices = async () => {
     const posts = await getPosts();

     if (posts.length === 0) return { type: 'NOTHING_POSTS_FOUND', message: 'Nothing posts found.' };

     return { type: null, message: posts };
};
