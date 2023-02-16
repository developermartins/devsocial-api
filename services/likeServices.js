import { getLikes } from "../model/likeModel.js";

export const getLikeServices = async (postId) => {
     const res = await getLikes(postId);

     return { type: null, message: res };
};
