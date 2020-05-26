exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 128).notNullable().index();
      tbl.string("password", 255).notNullable();
      tbl
        .integer("comment_id")
        .unsigned()
        .references("id")
        .inTable("users_and_comment");
    })
    .createTable("comment", (tbl) => {
      tbl.increments();
      tbl.string("comment", 500).notNullable();
      tbl.integer("likes_total");
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      tbl
        .integer("child_id")
        .unsigned()
        .references("id")
        .inTable("commentChild");
    })
    .createTable("users_and_comment", (tbl) => {
      tbl.increments();
      tbl
        .integer("user_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("comment");
      tbl
        .integer("comment_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users");
    });
};

exports.down = function (knex) {
  return knex
    .dropTableIfExists("users_and_comment")
    .dropTableIfExists("comment")
    .dropTableIfExists("users");
};
