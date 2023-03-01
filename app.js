import express from "express";
const app = express();
const port = 3001;

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import commentsRoutes from "./routes/comments.js";
import likesRoutes from "./routes/likes.js";
import postsRoutes from "./routes/posts.js";
import relationshipsRoutes from "./routes/relationships.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import bodyParser from "body-parser";

app.use((_req, res, next) => {
     res.header("Access-Control-Allow-Credentials", true)
     next()
});

app.use(bodyParser.urlencoded({
     extended: true
}));

app.use(express.json());
app.use(cors({
     origin: "http://localhost:3000"
}));
app.use(cookieParser())

const storage = multer.diskStorage({
     destination: function (req, file, cb) {
       cb(null, '../devsocial/public/upload')
     },
     filename: function (req, file, cb) {
       cb(null, Date.now() + file.originalname)
     }
})
   
const upload = multer({ storage: storage })

app.post("/api/upload", upload.single("file"), (req, res) => {
     const file = req.file;
     res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/likes", likesRoutes);
app.use("/api/relationships", relationshipsRoutes);

app.listen(port, () => console.log(`App listening on port ${port}! 👌`));
