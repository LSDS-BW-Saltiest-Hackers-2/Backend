exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users").then(function () {
    // Inserts seed entries
    return knex("users").insert([
      { id: 1, username: "test", password: "1" },
      { id: 2, username: "test2", password: "2" },
      { id: 3, username: "test3", password: "3" },
    ]);
  });
};
