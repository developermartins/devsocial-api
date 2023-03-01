import { getUserServices } from "../services/userServices.js";

export const getUser = async (req, res) => {
     const { userId } = req.params;

     const { type, message } = await getUserServices(userId);

     if (type === 'BAD_REQUEST') return res.status(400).json(message);
     if (type === 'NOT_FOUND') return res.status(404).json(message);

     return res.status(200).json(message);
};
