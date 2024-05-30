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
    .createTable("transactions", (table) => {
      table
        .uuid("transaction_id")
        .primary()
        .defaultTo(knex.raw("uuid_generate_v4()"));
      table.uuid("user_id").references("id").inTable("users");
      table.timestamp("transaction_date").defaultTo(knex.fn.now());
      table.decimal("amount", 10, 2);
      table.integer("points_earned");
    })
    .createTable("loyalty_points", (table) => {
      table
        .uuid("points_id")
        .primary()
        .defaultTo(knex.raw("uuid_generate_v4()"));
      table.uuid("user_id").unique().references("id").inTable("users");
      table.integer("points_balance").defaultTo(0);
      table.timestamp("last_updated").defaultTo(knex.fn.now());
    })
    .createTable("rewards", (table) => {
      table
        .uuid("reward_id")
        .primary()
        .defaultTo(knex.raw("uuid_generate_v4()"));
      table.string("reward_name", 100);
      table.string("image_url");
      table.integer("points_required");
    })
    .createTable("redemptions", (table) => {
      table
        .uuid("redemption_id")
        .primary()
        .defaultTo(knex.raw("uuid_generate_v4()"));
      table.uuid("user_id").references("id").inTable("users");
      table.uuid("reward_id").references("reward_id").inTable("rewards");
      table.timestamp("redemption_date").defaultTo(knex.fn.now());
      table.integer("points_used");
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
