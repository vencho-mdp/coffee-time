exports.up = async function (knex) {
  await knex.schema.createTable("used_sales_ids", (table) => {
    table.string("sale_id").primary(); // Define sale_id as a primary key
  });
};
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("used_sales_ids");
};
