require("dotenv").config();

const pgConnection =
  process.env.DATABASE_URL || "postgresql://postgres@localhost/auth";

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./db/usersAndC.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
      },
      useNullAsDefault: true,
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./testing db/test.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./testing db/migrations",
    },
    seeds: {
      directory: "./testing db/seeds",
    },
  },

  // heroku postgres
  production: {
    client: "pg", // npm i pg
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};
