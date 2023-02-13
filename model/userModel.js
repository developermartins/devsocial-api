import { connection } from "./connect.js";

export const getUserByUsername = async (username) => {
     const [result] = await connection.execute (
          "SELECT * FROM users WHERE username = ?",
          [username],
     );

     return result;
};

export const getUserByEmail = async (email) => {
     const [result] = await connection.execute (
          "SELECT * FROM users WHERE email = ?",
          [email],
     );

     return result;
};

export const registerUser = async (username, email, hashedPassword, name) => {
    await connection.execute(
          "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?, ?, ?, ?)",
          [username, email, hashedPassword, name],
    );

    return
};
