const express = require("express");
const router = express.Router();
const Comment = require("./usersAndC-model.js");
const server = express();

server.use(express.json());
server.use(isValid);

router.get("/", (req, res) => {
  Comment.get().then((comment) => {
    res.status(200).json(comment);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Comment.getById(id).then((comment) => {
    res.status(200).json(comment);
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Comment.remove(id).then((comment) => {
    res
      .status(200)
      .json({ message: "the comment has successfully been deleted" });
  });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Comment.getById(id).then((user) => {
    Comment.update(id, {
      comment: data.comment,
    }).then((updated) => {
      Comment.getById(id).then((comment) => res.status(200).json(comment));
    });
  });
});

Comment.post("/", (req, res) => {
  Comment.add(req.body).then((comment) => {
    res.status(201).json(comment);
  });
});

function isValid(user) {
  return Boolean(
    user.username && user.password && typeof user.password === "string"
  );
}

module.exports = router;
