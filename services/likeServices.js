import { getLikes } from "../model/likeModel";

export const getLikeServices = async (postId) => {
     const res = await getLikes(postId);

     return { type: null, message: res };
};
