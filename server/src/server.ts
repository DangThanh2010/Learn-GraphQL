import cors from "cors";
import express from "express";
import { authMiddleware, handleLogin } from "./auth";

const PORT = 9000;

const app = express();
app.use(cors(), express.json(), authMiddleware);

app.get("/login", (req, res) => {
  return res.json({
    text: "11111",
  });
});
app.post("/login", handleLogin);

app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
});
