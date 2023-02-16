import { getComments, addComment } from "../model/commentsModel.js";

export const getCommentsServices = async (postId) => {
     const res = await getComments(postId);

     if (res.length === 0) return { type: "NOT_FOUND", message: "No comments yet." };

     return { type: null, message: res };
};

export const addCommentServices = async (comment_content, postId, userInfo) => {
     if (!comment_content) return { type: 'MISSING_DATA', message: 'comment_content is required.' };
     if (!postId) return { type: 'MISSING_DATA', message: 'postId is required.' };
     if (!userInfo) return { type: 'MISSING_DATA', message: 'user id is required.' };

     const res = await addComment(comment_content, postId, userInfo);

     return { type: null, message: res }
};