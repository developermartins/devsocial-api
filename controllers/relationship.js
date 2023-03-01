import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
import { getRelationshipServices, addRelationshipServices, deleteRelationshipServices } from "../services/likeServices.js";

export const getRelationships = async (req, res) => {

     const { postId } = req.query;

     const { message } = await getRelationshipServices(postId);

     return res.status(200).json(message.map(like=>like.userId));
};

export const addRelationShips = async (req, res) => {

     const token = req.cookies.acessToken;

     const { postId } = req.query;

     if (!token) return res.status(401).json("Not logged in!");

     jwt.verify(token, process.env.SECRET, async function(err, userInfo) {
          if (err) return res.status(403).json("Token is not valid!");

          const { type, message } = await addRelationshipServices(userInfo.id, postId);
     
          if (type) return res.status(404).json(message);
     
          return res.status(200).json(message);
     });
};

export const deleteRelationships = async (req, res) => {

     const token = req.cookies.acessToken;

     const { postId } = req.query;

     if (!token) return res.status(401).json("Not logged in!");

     jwt.verify(token, process.env.SECRET, async function(err, userInfo) {
          if (err) return res.status(403).json("Token is not valid!");

          const { type, message } = await deleteRelationshipServices(userInfo.id, postId);
     
          if (type) return res.status(404).json(message);
     
          return res.status(200).json(message);
     });
};
