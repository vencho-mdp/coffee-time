exports.up = async function (knex) {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex.schema
    .createTable("users", (table) => {
      table
        .uuid("id")
        .primary()
        .unique()
        .defaultTo(knex.raw("uuid_generate_v4()"));
      table.string("name");
      table.string("avatar_url").unique();
      table.string("email").unique();
      table.timestamps(true, true);
    })

    .createTable("loyalty_points", (table) => {
      table
        .uuid("points_id")
        .primary()
        .defaultTo(knex.raw("uuid_generate_v4()"));
      table.uuid("user_id").unique().references("id").inTable("users");
      table.integer("points_balance").defaultTo(0);
      table.timestamp("last_updated").defaultTo(knex.fn.now());
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("redemptions")
    .dropTableIfExists("rewards")
    .dropTableIfExists("loyalty_points")
    .dropTableIfExists("transactions")
    .dropTableIfExists("users");
};
