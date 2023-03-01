import { addDislike, addLike, getLikes } from "../model/likeModel.js";

export const getRelationshipServices = async (postId) => {
     const res = await getLikes(postId);

     return { type: null, message: res };
};

export const addRelationshipServices = async (userId, postId) => {
     await addLike(userId, postId);

     return { type: null, message: "Post has been liked!" };
};

export const deleteRelationshipServices = async (userId, postId) => {
     await addDislike(userId, postId);

     return { type: null, message: "Like has been removed!" };
};
