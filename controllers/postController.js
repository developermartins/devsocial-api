import { getPostsServices } from "../services/postsServices";

export const posts = async (req, res) => {
     const [ type, message ] = await getPostsServices();

     if (type) return res.status(404).json(message);

     return 
};
