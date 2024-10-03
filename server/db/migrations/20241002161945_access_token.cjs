/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.createTable("api_token", (table) => {
    table.string("token").notNullable(); // Token column
    table.timestamp("expires_at").notNullable(); // Expiration date column
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("api_token");
};
