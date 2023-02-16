import moment from "moment";
import { connection } from "./connect.js";

export const getComments = async (postId) => {
     const [result] = await connection.execute (
          `SELECT c.*, u.id AS userId, name, profile_pic FROM comments AS c JOIN users AS u ON (u.id = p.userId)
          WHERE c.postId = ? ORDER BY c.create_time DESC`,
          [postId]
     );

     return result;
};