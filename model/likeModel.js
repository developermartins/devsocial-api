import { connection } from "./connect.js";

export const getLikes = async (postId) => {
     const [result] = await connection.execute (
          `SELECT userId from likes WHERE postId = ?`,
          [postId]
     );

     return result;
};