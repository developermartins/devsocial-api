import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
import { getLikeServices } from "../services/likeServices.js";

export const getLikes = async (req, res) => {

     const { postId } = req.query;

     await getLikeServices(postId);
};
