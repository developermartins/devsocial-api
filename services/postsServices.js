import { addPost, getPosts, getPostsById } from "../model/postsModel.js";

export const getPostsServices = async (userInfo, userId) => {

     if (!userId) {
          const posts = await getPosts(userInfo);
          if (posts.length === 0) return { type: 'NOTHING_POSTS_FOUND', message: 'Nothing posts found.' }

          return { type: null, message: posts };
     } else {
          const postsById = await getPostsById(userId);
          if (postsById.length === 0) return { type: 'NOTHING_POSTS_FOUND', message: 'Nothing posts found.' }

          return { type: null, message: postsById };
     };
};

export const addPostServices = async (postContent, img, userId) => {
     if (!postContent) return { type: 'MISSING_DATA', message: 'Post content is required.' };

     await addPost(postContent, img, userId);

     return { type: null, message: 'Post has been created!' };
};