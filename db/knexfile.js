// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

// dotenv.config();
const path = require("path");
// require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
console.log(process.env.EX);

module.exports = {
  development: {
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

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 3,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
