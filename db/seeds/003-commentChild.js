exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("commentChild")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("commentChild").insert([
        {
          id: 1,
          comment:
            "Cant Believe this happened huh? I cant believe you cant believe this happened.",

          likes_total: 2,
        },
        {
          id: 2,
          comment:
            "Oh yeah? Well I cant believe you cant believe that they cant believe this happened.",

          likes_total: 10,
        },
        {
          id: 3,
          comment: "This is crazytown.",

          likes_total: 7,
        },
        {
          id: 4,
          comment: "You are totes right. What even...",

          likes_total: 0,
        },
      ]);
    });
};
