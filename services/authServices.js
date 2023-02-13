import { getUserByUsername, registerUser } from "../model/userModel.js";
import bcrypt from 'bcryptjs';

export const resgisterUserServices = async (username, email, password, name) => {
     const user = await getUserByUsername(username);

     if (user.length) return { type: 'USER_ALREADY_EXISTS', message: 'User already exists.' };

     const salt = bcrypt.genSaltSync(10);
     const hashedPassword = bcrypt.hashSync(password, salt);

     await registerUser(username, email, hashedPassword, name);

     return { type: null, message: 'User has been created.' };
};
