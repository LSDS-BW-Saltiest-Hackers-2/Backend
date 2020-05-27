const knex = require("knex");
const db = knex(require("../knexfile").development);

module.exports = {
  get,
  getById,
  add,
  update,
  remove,
  getChildComment,
};

function get() {
  return db("comment");
}

function getById(id) {
  return db("comment").where({ id }).first();
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

function getChildComment(commentId) {
  return db("comment as c")
    .join("commentChild as cc", "cc.id", "c.comment_id")
    .select("c.id", "c.comment", "cc.comment")
    .where("c.comment_id", commentId);
}
