import { getComments } from "../model/commentsModel.js";

export const getCommentsServices = async (postId) => {
     const res = await getComments(postId);

     if (res.length === 0) return { type: "NOT_FOUND", message: "No comments yet." };

     return { type: null, message: res };
};
