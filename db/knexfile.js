// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

// import dotenv from "dotenv";

// dotenv.config();

module.exports = {
  development: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    // connection: {
    //   database: "chat_backend",
    //   user: "am",
    //   password: null,
    // },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
