exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("comment")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("comment").insert([
        { id: 1, comment: "This is rediculous!", likes_total: 4 },
        {
          id: 2,
          comment: "Crazytown am I right? XD",
          likes_total: 0,
        },
        { id: 3, comment: "What even...", likes_total: 2 },
      ]);
    });
};
