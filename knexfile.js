require("dotenv").config();

const pgConnection =
  process.env.DATABASE_URL || "postgresql://postgres@localhost/";

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./db/usersAndC.db3",
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
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};
