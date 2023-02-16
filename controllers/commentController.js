import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';

dotenv.config();

export const comments = async (req, res) => {
     const token = req.cookies.acessToken;

     if (!token) return res.status(401).json("Not logged in!");

     jwt.verify(token, process.env.SECRET, async function(err, userInfo) {
          if (err) return res.status(403).json("Token is not valid!");

          const { type, message }  = await getCommentsServices(userInfo);
     
          if (type) return res.status(404).json(message);
     
          return res.status(200).json(message);
     }); 
};
