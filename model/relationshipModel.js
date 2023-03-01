import { connection } from "./connect.js";

export const getRelationships = async (followedUserId) => {
     const [result] = await connection.execute (
          `SELECT followerUserId from relationships WHERE followedUserId = ?`,
          [followedUserId]
     );

     return result;
};

export const addRelationship = async (followerUserId, followedUserId) => {
     const [result] = await connection.execute (
         "INSERT INTO relationships (`followerUserId`, `followedUserId`) VALUES (?, ?)",
          [followerUserId, followedUserId]
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
