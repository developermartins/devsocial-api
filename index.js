import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { Mongoose } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import authRoutes from './routes/auth.js';

import { fileURLToPath } from 'url';
import { register } from './controllers/auth.js';
import { verifyToken } from './middleware/auth.js';

/* CONFIG */

const app = express();
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

/* FILE STORAGE */

const storage = multer.diskStorage({
     destination: function(req, file, cb) {
          cb(null, "public/assets");
     },
     
     filename: function(req, file, cb) {
          cb(null, file.originalname);
     }
});

const upload = multer({ storage });

/* ROUTES WITH FILE */

app.post("/auth", upload.single("picture"), register);

/* MONGOOSE SETUP */

const port = process.env.PORT || 6001;

mongoose.connect(process.env.MONGO_URL, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() => {
     app.listen(port, () => console.log(`Server Port: ${port}`));
}).catch((error) => console.log(`${error} did not connect.`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));