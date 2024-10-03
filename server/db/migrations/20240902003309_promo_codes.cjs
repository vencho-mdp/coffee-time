exports.up = async function (knex) {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex.schema.createTable("promo_codes", (table) => {
    table
      .uuid("id")
      .primary()
      .unique()
      .defaultTo(knex.raw("uuid_generate_v4()")); // UUID as the primary key
    table.string("product_id"); // Generic string for the product ID
    table.boolean("used").defaultTo(false); // Boolean for whether the promo code has been used
    table.string("name"); // String for the promo code name
    table.timestamps(true, true); // Timestamps for created_at and updated_at
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("promo_codes");
};
