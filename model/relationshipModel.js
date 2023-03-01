import { connection } from "./connect.js";

export const getRelationships = async (postId) => {
     const [result] = await connection.execute (
          `SELECT userId from likes WHERE postId = ?`,
          [postId]
     );

     return result;
};

export const addRelationship = async (userId, postId) => {
     const [result] = await connection.execute (
         "INSERT INTO likes (`userId`, `postId`) VALUES (?, ?)",
          [userId, postId]
     );

     return result;
};

export const deleteRelationship = async (userId, postId) => {
     const [result] = await connection.execute (
         "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?",
          [userId, postId]
     );

     return result;
};
