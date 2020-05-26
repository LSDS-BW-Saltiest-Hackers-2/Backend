exports.up = function (knex) {
  return knex.schema
    .createTable("commentChild", (tbl) => {
      tbl.increments();
      tbl.string("comment", 500).notNullable();
      tbl.integer("likes_total");
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("commentPAndChild", (tbl) => {
      tbl.increments();
      tbl
        .integer("parent_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("commentChild");
      tbl
        .integer("child_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("comment");
    });
};

exports.down = function (knex) {
  return knex
    .dropTableIfExists("commentPAndChild")
    .dropTableIfExists("commentChild");
};
