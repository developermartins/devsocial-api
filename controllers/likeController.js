import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
import { getLikeServices } from "../services/likeServices.js";

export const getLikes = async (req, res) => {

     const { postId } = req.query;

     const { message } = await getLikeServices(postId);

     return res.status(200).json(message);
};
