import { getPostsServices } from "../services/postsServices.js";

export const posts = async (req, res) => {
     const { type, message }  = await getPostsServices();

     if (type) return res.status(404).json(message);

     return res.status(200).json(message);
};
