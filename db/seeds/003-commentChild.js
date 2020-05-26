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
          parent_id: 1,
          likes_total: 2,
          user_id: 1,
        },
        {
          id: 2,
          comment:
            "Oh yeah? Well I cant believe you cant believe that they cant believe this happened.",
          parent_id: 1,
          likes_total: 10,
          user_id: 1,
        },
        {
          id: 3,
          comment: "This is crazytown.",
          parent_id: 2,
          likes_total: 7,
          user_id: 2,
        },
        {
          id: 4,
          comment: "You are totes right. What even...",
          parent_id: 3,
          likes_total: 0,
          user_id: 3,
        },
      ]);
    });
};
