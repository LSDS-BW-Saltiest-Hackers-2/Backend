exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "test", password: "1", comment_id: 1 },
        { id: 2, username: "test2", password: "2", comment_id: 2 },
        { id: 3, username: "test3", password: "3", comment_id: 3 },
      ]);
    });
};