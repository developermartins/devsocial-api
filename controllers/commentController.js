import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';

import { getCommentsServices } from "../services/commentsServices.js";

dotenv.config();

export const comments = async (req, res) => {

     const { postId } = req.query;

     const { type, message }  = await getCommentsServices(postId);

     if (type) return res.status(404).json(message);

     return res.status(200).json(message);
};
