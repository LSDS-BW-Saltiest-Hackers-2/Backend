const express = require("express");
const router = express.Router();
const Comment = require("./usersAndC-model.js");
const server = express();

server.use(express.json());
server.use(isValid);

//comments

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

router.post("/", (req, res) => {
  Comment.add(req.body).then((comment) => {
    res.status(201).json(comment);
  });
});

//replies

router.get("/:id/replies", (req, res) => {
  const id = req.params.id;
  Comment.getRepliesTest(id).then((comment) => {
    res.status(200).json(comment);
  });
});

router.get("/:id/replies/:id", (req, res) => {
  const id = req.params.id;
  Comment.getByIdReply(id).then((comment) => {
    res.status(200).json(comment);
  });
});

router.post("/:id/replies", (req, res) => {
  Comment.addReply(req.body).then((reply) => {
    res.status(201).json(reply);
  });
});

router.put("/:id/replies/:id", (req, res) => {
  const id = req.params.id;
  const id2 = req.params.id;
  const data = req.body;
  Comment.getByIdReply(id).then((user) => {
    Comment.updateReply(id2, {
      comment: data.comment,
    }).then((updated) => {
      Comment.getByIdReply(id2).then((comment) =>
        res.status(200).json(comment)
      );
    });
  });
});

router.delete("/:id/replies/:id", (req, res) => {
  const id = req.params.id;
  Comment.removeReply(id).then((comment) => {
    res
      .status(200)
      .json({ message: "the reply has successfully been deleted" });
  });
});

//saved

router.post("/:id/comment/:id/saved-comments", (req, res) => {
  const id = req.params.id;
  const id2 = req.params.id;
  Comment.getByIdU(id).then((user) => {
    Comment.getByIdDS(id2).then((comment) => {
      console.log(comment);
      const sComment = {
        comment_id: id2,
        username: comment.UserName,
        commentSaved: comment.Comment,
        Saltiness: comment.Saltiness,
      };
      Comment.SaveComment(sComment)
        .then((sc) => {
          res.status(201).json(sc);
        })
        .catch((err) => {
          console.log(err);
          res.status(401).json(err.message);
        });
    });
  });
});

router.get("/:id/saved-comments", (req, res) => {
  const id = req.params.id;
  Comment.getByIdU(id).then((comment) => {
    Comment.getSavedComments()
      .then((comment) => {
        res.status(200).json(comment);
        console.log("comment", comment);
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json(err.message);
      });
  });
});

router.delete("/:id/saved-comments/:id", (req, res) => {
  const id = req.params.id;
  Comment.deleteSavedComments(id).then((comment) => {
    res
      .status(200)
      .json({ message: "Your specified saved comment has been deleted" });
  });
});

router.put("/:id/comment/:id/saved-comments/", (req, res) => {
  const id = req.params.id;
  const id2 = req.params.id;
  const data = req.body;
  Comment.getByIdSaved(id).then((user) => {
    Comment.updateSavedC(id2, {
      commentSaved: data.commentSaved,
    }).then((updated) => {
      Comment.getByIdSaved(id2).then((comment) =>
        res.status(200).json(comment)
      );
    });
  });
});

//ds

router.get("/:id/Allcomments", (req, res) => {
  const id = req.params.id;
  Comment.getByIdU(id).then((user) => {
    Comment.getDS()
      .then((comment) => {
        res.status(200).json(comment);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err.message);
      });
  });
});

function isValid(user) {
  return Boolean(
    user.username && user.password && typeof user.password === "string"
  );
}

module.exports = router;
