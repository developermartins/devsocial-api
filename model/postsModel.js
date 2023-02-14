import { connection } from "./connect.js";

export const getPosts = async () => {
     const [result] = await connection.execute (
          'SELECT p.*, u.id AS userId, name, profile_pic FROM posts AS p JOIN users AS u ON (u.id = p.userId)'
     );

     return result;
};
