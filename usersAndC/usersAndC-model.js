const knex = require("knex");
const db = knex(require("../knexfile").development);
const dbDS = require("../db/dsConnection.js");
module.exports = {
  get,
  getById,
  add,
  update,
  remove,
  getByIdReply,
  addReply,
  updateReply,
  removeReply,
  getRepliesTest,
  SaveComment,
  getSavedComments,
  deleteSavedComments,
  getByIdSaved,
  getByIdU,
  updateSavedC,
  getDS,
  getByIdDS,
};

//comments

function get() {
  return db("comment");
}

function getById(id) {
  return db("comment").where({ id }).first();
}
function getByIdU(id) {
  return db("users").where({ id }).first();
}
function getByIdSaved(id) {
  return db("SavedCommentsAndReplies").where({ id }).first();
}
function getByIdDS(Comment_ID) {
  return dbDS("Comments_salty").where({ Comment_ID }).first();
}

function getByIdReply(id) {
  return db("commentChild").where({ id }).first();
}
function add(comment) {
  return db("comment")
    .insert(comment)
    .then((ids) => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db("comment").where({ id }).update(changes);
}

function remove(id) {
  return db("comment").where("id", id).del();
}

//replies

// function getChildComment(commentId) {
//   return db("comment as c")
//     .join("commentChild as cc", "c.id", "cc.id")
//     .select("*", "c.comment", "cc.comment")
//     .where("cc.parent_id", commentId);
// }

function getRepliesTest(commentId) {
  return db("commentChild").where("commentChild.parent_id", commentId);
}

function addReply(comment) {
  return db("commentChild")
    .insert(comment)
    .then((ids) => {
      return getByIdReply(ids[0]);
    });
}

function updateReply(id, changes) {
  return db("commentChild").where({ id }).update(changes);
}

function removeReply(id) {
  return db("commentChild").where("id", id).del();
}

function SaveComment(comment) {
  return db("SavedCommentsAndReplies")
    .insert(comment)
    .then((ids) => {
      return getByIdSaved(ids[0]);
    });
}

function getSavedComments() {
  return db("SavedCommentsAndReplies");
}

function deleteSavedComments(id) {
  return db("SavedCommentsAndReplies").where("id", id).del();
}

function updateSavedC(id, changes) {
  return db("SavedCommentsAndReplies").where({ id }).update(changes);
}

function getDS() {
  return dbDS("Comments_salty");
}
