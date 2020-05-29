exports.up = function (knex) {
  return knex.schema.createTable("SavedCommentsAndReplies", (tbl) => {
    tbl.increments();
    tbl.string("commentSaved", 500);
    tbl.integer("user_id").unsigned();
    tbl.integer("comment_id").unsigned();
    tbl.integer("child_id");
    tbl
      .timestamp("created_at")
      .defaultTo(knex.fn.now())
      .references("timestamp")
      .inTable("comment");
    tbl
      .string("username", 128)
      .notNullable()
      .references("username")
      .inTable("users");
    tbl.integer("Saltiness");
  });
};

exports.down = function (knex) {
  return knex.dropTableIfExists("SavedCommentsAndReplies");
};
