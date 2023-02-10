import Express from "express";
const app = Express();
const port = 3001;

import userRoutes from "./routes/users.js";

app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}! 👌`));
