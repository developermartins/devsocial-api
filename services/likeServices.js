import { addDislike, addLike, getLikes } from "../model/likeModel.js";

export const getLikeServices = async (postId) => {
     const res = await getLikes(postId);

     return { type: null, message: res };
};

export const addLikeServices = async (userId, postId) => {
     await addLike(userId, postId);

     return { type: null, message: "Post has been liked!" };
};

export const addDislikeServices = async (userId, postId) => {
     await addDislike(userId, postId);

     return { type: null, message: "Like has been removed!" };
};
