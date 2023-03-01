export const getUserServices = async (userId) => {
     if (!userId) return { type: 'BAD_REQUEST', message: 'User Id is required!' };

     const user = await getUserById(userId);

     return { type: null, message: posts };
};
