import Express from "express";
const app = Express();
const port = 3001;

import authRoutes from "./routes/users.js";
import userRoutes from "./routes/users.js";
import commentsRoutes from "./routes/users.js";
import likesRoutes from "./routes/users.js";
import postsRoutes from "./routes/users.js";

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/likes", likesRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}! 👌`));
