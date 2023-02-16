import moment from "moment";
import { connection } from "./connect.js";

export const getComments = async (postId) => {
     const [result] = await connection.execute (
          `SELECT c.*, u.id AS userId, name, profile_pic FROM comments AS c JOIN users AS u ON (u.id = c.commentUserId)
          WHERE c.postId = ? ORDER BY c.create_time DESC`,
          [postId]
     );

     return result;
};

export const addComment = async (comment_content, postId, userInfo) => {

     await connection.execute (
          "INSERT INTO comments (`create_time`, `comment_content`, `commentUserId`, `postId`) VALUE (?, ?, ?, ?)",
          [
               moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
               comment_content,
               userInfo.id,
               postId
          ]
     );

     return;
};