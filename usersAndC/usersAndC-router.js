const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const morgan = require("morgan");

const server = express();
const multer = require("multer");
const upload = multer({ dest: "/public" });
const Model = require("./usersAndC-model.js");

server.use(express.json());
server.use(isValid);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(express.static(__dirname + "/public"));

const storage = multer.diskStorage({
  destination: "../images",
  filename: function (req, file, callback) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (error) return callback(error);
      callback(null, raw.toString("hex") + path.extname(file.originalname));
    });
  },
});

server.post(
  "/",
  upload.single("avatar", (req, res) => {
    if (!req.file) {
      console.log("no file recieved");
      res.status(404).json({ message: "no image/file was found or recieved" });
      return res.send({ success: false });
    } else {
      console.log("file recieved");
      const host = req.host;
      const filePath = req.protocol + "://" + host + "/" + req.file.path;
      res.status(200).json({ message: "you successfully sent the image/file" });
      return res.send({ success: true });
    }
  })
);

function isValid(user) {
  return Boolean(
    user.username && user.password && typeof user.password === "string"
  );
}

module.exports = router;
