import { connection } from "./connect.js";

export const getPosts = async (userInfo) => {

     const [result] = await connection.execute (
          `SELECT p.*, u.id AS userId, name, profile_pic FROM posts AS p JOIN users AS u ON (u.id = p.userId)
          LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId = ? OR p.userId = ?
          ORDER BY p.create_time DESC`,
           [userInfo.id, userInfo.id]
     );

     return result;
};
