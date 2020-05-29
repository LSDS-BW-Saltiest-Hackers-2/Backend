exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users_and_comment")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users_and_comment").insert([
        { id: 1, user_id: 1, comment_id: 1 },
        { id: 2, user_id: 2, comment_id: 2 },
        { id: 3, user_id: 3, comment_id: 3 },
      ]);
    });
};
