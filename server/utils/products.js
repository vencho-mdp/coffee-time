const raw_products = [
  {
    category: "café",
    points_required: 3500,
    image: "cafe_xl.jpg",
    code: "105",
  },
  // {
  //   category: "Dulce",
  //   points_required: 3500,
  //   image: "muffin_chocolate.jpg",
  //   product_name_in_dashboard: "Muffin Chocolate",
  // },
  {
    category: "Dulce",
    points_required: 3500,
    image: "muffin_limon.jpg",
    code: "439",
  },
  {
    category: "salado",
    points_required: 1900,
    image: "medialuna_de_jyq.jpeg",
    code: "409",
  },
  // {
  //   category: "Dulce",
  //   points_required: 900,
  //   image: "medialuna_dulce.jpeg",
  //   product_name_in_dashboard: "D. Medialuna dulce",
  // },
  {
    category: "Dulce",
    points_required: 6000,
    image: "porcion_bruce.jpg",
    code: "47",
    product_name_in_dashboard: "Torta Bruce",
  },
  {
    category: "Dulce",
    points_required: 3500,
    image: "porcion_budin_limon_y_amapolas.jpg",
    code: "487",
  },
  {
    category: "Dulce",
    points_required: 5600,
    image: "porcion_de_chesscake_frutos_rojos.jpeg",
    code: "403",
  },
  {
    category: "Dulce",
    points_required: 6600,
    image: "porcion_red_velvet.jpg",
    product_name_in_dashboard: "Red velvet",
  },
  {
    category: "salado",
    points_required: 3630,
    image: "scon_de_queso.jpg",
    code: "447",
  },
  {
    category: "salado",
    points_required: 3600,
    image: "scon_relleno.jpg",
    product_name_in_dashboard: "Scon relleno cheddar y lomito",
  },
  {
    category: "salado",
    points_required: 7100,
    image: "tostado_jamon_y_provolone.jpg",
    code: "710",
  },
].map((p) => ({
  ...p,
  name: p.image
    .split(".")[0] // Elimina la extensión del archivo
    .replace(/_/g, " ") // Reemplaza guiones bajos por espacios
    .replace(/\b\w/g, (c) => c.toUpperCase()), // Capitaliza la primera letra de cada palabra
}));
const url = "https://api.fu.do/v1alpha1/products?page[size]=500";

const fetchProducts = async ($fetch, FUDO_API_TOKEN, page_number) => {
  return await $fetch(url + "&page[number]=" + page_number, {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${FUDO_API_TOKEN}`,
    },
  });
};
export default defineCachedFunction(
  async () => {
    const FUDO_API_TOKEN = await getApiToken();
    // max api response is 500 items, so if the length is 500, there are more items
    let page_number = 1;
    let response = await fetchProducts($fetch, FUDO_API_TOKEN, page_number);
    let products = response.data;
    while (
      // products length is 500 or 1000 or 1500 etc
      products.length % 500 ===
      0
    ) {
      page_number++;
      response = await fetchProducts($fetch, FUDO_API_TOKEN, page_number);
      products = products.concat(response.data);
    }
    return raw_products.map((p) => ({
      ...p,
      id: products.find(
        (prod) =>
          prod.attributes.code === p?.code ||
          prod.attributes.name === p?.product_name_in_dashboard
      )?.id,
      points_required: products.find(
        (prod) =>
          prod.attributes.code === p?.code ||
          prod.attributes.name === p?.product_name_in_dashboard
      )?.attributes?.price,
    }));
  },
  {
    maxAge: 1000 * 60 * 60 * 24, // 24 hs
  }
);
