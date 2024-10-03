import db from "../db/db";
import products_in_app from "../utils/products";
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  let code_value;
  let isCodeUnique = false;
  while (!isCodeUnique) {
    code_value =
      body.product_name.substring(0, 3).toUpperCase() +
      "-" +
      Math.floor(100 + Math.random() * 900);

    // Check if the code already exists in the database
    const existingCode = await db('promo_codes').where({ name: code_value }).first();

    if (!existingCode) {
      isCodeUnique = true;
    }
  }
  // Insert the unique code into the database
  await db('promo_codes').insert({
    product_id: body.product_id,
    used: false,
    name: code_value
  });
  const { user } = await getServerSession(event);
    // Update the points_balance in the loyalty_points table
      const FUDO_API_TOKEN = await getApiToken()
  const { data: products } = await $fetch("https://api.fu.do/v1alpha1/products", {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${FUDO_API_TOKEN}`,
    },
  });

    const points_to_reduce = products_in_app.find(
     p => p.product_name_in_dashboard === products.find(e => e.id === body.product_id).attributes.name
    )?.points_required 

     await db('loyalty_points')
      .where({ user_id: user.id })
      .decrement('points_balance', points_to_reduce)
      .returning('*');

  return { code_value };
});
