const router = require("express").Router();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "/public" });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

const storage = multer.diskStorage({
  destination: "../images",
  filename: function (req, file, callback) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (error) return callback(error);
      callback(null, raw.toString("hex") + path.extname(file.originalname));
    });
  },
});

app.post(
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
module.exports = router;
