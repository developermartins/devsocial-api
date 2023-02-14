import { connection } from "./connect.js";

export const getPosts = async () => {
     const [result] = await connection.execute (
          'SELECT * FROM posts AS p JOIN users AS u'
     );

     return result;
};
