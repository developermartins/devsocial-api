import { getUserByUsername, getUserByEmail, registerUser } from "../model/userModel.js";
import bcrypt from 'bcryptjs';

let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const resgisterUserServices = async (username, email, password, name) => {
     const user = await getUserByUsername(username);
     const userByEmail = await getUserByEmail(email);

     if (user.length) return { type: 'USER_ALREADY_EXISTS', message: 'User already exists.' };
     if (userByEmail.length) return { type: 'EMAIL_ALREADY_IN_USE', message: 'Email already in use.' };
     if (password.length < 8) return { type: 'INVALID_PASSWORD', message: 'Password length must have 8 characters or more.' };
     if (mailformat.test(email) == false) return { type: 'INAVLID_MAIL', message: 'You have entered an invalid email address.' };

     const salt = bcrypt.genSaltSync(10);
     const hashedPassword = bcrypt.hashSync(password, salt);

     await registerUser(username, email, hashedPassword, name);

     return { type: null, message: 'User has been created.' };
};
