import { getApiToken } from "../utils/token";
import products from "../utils/products";
const products_missing_dashboard_id = products
const url = "https://api.fu.do/v1alpha1/products";

export default defineEventHandler(async (event) => {
  const FUDO_API_TOKEN = await getApiToken()
  const { data: products } = await $fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${FUDO_API_TOKEN}`,
    },
  });

  return products_missing_dashboard_id.map((p) => ({
    ...p,
    id: p.product_name_in_dashboard
      ? products.find(
          (prod) => prod.attributes.name === p.product_name_in_dashboard
        )?.id
      : undefined,
  }));
});
