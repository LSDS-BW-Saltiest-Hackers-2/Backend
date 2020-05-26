const express = require("express");
const router = express.Router();
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(isValid);
//
function isValid(user) {
  return Boolean(
    user.username && user.password && typeof user.password === "string"
  );
}

module.exports = router;
