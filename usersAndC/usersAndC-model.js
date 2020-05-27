const knex = require("knex");
const db = knex(require("../knexfile").development);

module.exports = {
  get,
  getById,
  add,
  update,
  remove,
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
