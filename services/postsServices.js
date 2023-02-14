import { getPosts } from "../model/postsModel.js";

export const getPostsServices = async (userInfo) => {
     const posts = await getPosts(userInfo);

     if (posts.length === 0) return { type: 'NOTHING_POSTS_FOUND', message: 'Nothing posts found.' };

     return { type: null, message: posts };
};

export const addPostServices = async (post) => {

};