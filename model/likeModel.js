import { connection } from "./connect.js";

export const getLikes = async (postId) => {
     const [result] = await connection.execute (
          `SELECT userId from likes WHERE postId = ?`,
          [postId]
     );

     return result;
};

export const addLike = async (userId, postId) => {
     const [result] = await connection.execute (
         "INSERT INTO likes (`userId`, `postId`) VALUES (?, ?)",
          [userId, postId]
     );

     return result;
};

export const addDislike = async (userId, postId) => {
     const [result] = await connection.execute (
         "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?"
          [userId, postId]
     );

     return result;
};
