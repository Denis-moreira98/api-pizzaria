import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.json";
import "express-async-errors";
import cors from "cors";
import path from "path";

import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.get("/swagger.json", (req, res) => {
   res.sendFile(__dirname + "/swagger.json");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use((err: Error, req: Request, res: Response) => {
   if (err instanceof Error) {
      return res.status(400).json({
         error: err.message,
      });
   }
   return res.status(500).json({
      status: "error",
      message: "Internal server error",
   });
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Serve Online in port ${port}`));
