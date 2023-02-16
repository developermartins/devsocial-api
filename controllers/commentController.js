import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';

import { getCommentsServices, addCommentServices } from "../services/commentsServices.js";

dotenv.config();

export const comments = async (req, res) => {

     const { postId } = req.query;

     const { type, message }  = await getCommentsServices(postId);

     if (type) return res.status(404).json(message);

     return res.status(200).json(message);
};

export const addComment = async (req, res) => {

      const token = req.cookies.acessToken;

     const { comment_content, postId } = req.body;

     if (!token) return res.status(401).json("Not logged in!");

     jwt.verify(token, process.env.SECRET, async function(err, userInfo) {
          if (err) return res.status(403).json("Token is not valid!");

          const { type, message }  = await addCommentServices(comment_content, postId, userInfo);
     
          if (type) return res.status(404).json(message);
     
          return res.status(200).json(message);
     });
};
