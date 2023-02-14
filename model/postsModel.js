import { connection } from "./connect.js";

export const getPosts = async () => {
     const [result] = await connection.execute (
          'SELECT * FROM posts'
     );

     return result;
};
