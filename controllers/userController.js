export const getUser = async (req, res) => {
     const { userId } = req.params;

     const userData = await getUserServices(userId);
};
