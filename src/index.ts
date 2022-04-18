import express from "express";
import swaggerUi from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swaggerDocuments from "./swagger.json";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDocuments));
app.use("/users", usersRoutes);

export { app };
