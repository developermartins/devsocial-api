import { getUserById } from "../model/userModel";

export const getUserServices = async (userId) => {
     if (!userId) return { type: 'BAD_REQUEST', message: 'User Id is required!' };

     const user = await getUserById(userId);

     if (!user) return { type: 'NOT_FOUND', message: 'User not found' }

     const { password, ...info } = user;

     return { type: null, message: info };
};
