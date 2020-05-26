const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../usersAndC/usersAndC-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/auth", authRouter);
server.use("/users", usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "api is running properly" });
});

module.exports = server;
