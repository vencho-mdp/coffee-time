const raw_products = [
  {
    category: "dulce",
    image: "medialuna_unidad.jpg",
    code: "401",
    product_name_in_dashboard: "Medialuna dulce",
  },
  {
    category: "salado",
    image: "medialuna_unidad.jpg",
    code: "402",
    product_name_in_dashboard: "Medialuna salada",
  },
  {
    category: "cafetería",
    image: "cafe_xl.jpg",
    product_name_in_dashboard: "Cafe con leche TAZA XL",
  },
  {
    category: "cafetería",
    image: "cafe_l.jpg",
    product_name_in_dashboard: "Cafe con leche",
    code: "105",
  },
  {
    category: "salado",
    image: "medialuna_de_jyq.jpg",
    code: "5015",
  },

  {
    category: "dulce",
    image: "porcion_bruce.jpg",
    code: "47",
    product_name_in_dashboard: "Torta Bruce",
  },

  {
    category: "dulce",
    image: "porcion_de_cheesecake_frutos_rojos.jpg",
    code: "403",
  },
  {
    category: "dulce",
    image: "porcion_red_velvet.jpg",
    product_name_in_dashboard: "Red velvet",
  },
  {
    category: "dulce",
    image: "alfajor_ddl_y_frutos_rojos.jpg",
    product_name_in_dashboard: "Alfajor de dulce de leche y frutos rojos",
  },
  {
    category: "dulce",
    image: "alfajor_ganache.jpg",
    product_name_in_dashboard: "Alfajor choco negro y frutos rojos",
  },
  {
    category: "dulce",
    image: "alfajor_toffee.jpg",
    product_name_in_dashboard: "Alfajor Toffee",
  },
  {
    category: "salado",
    image: "scon_de_queso.jpg",
    code: "447",
  },
  {
    category: "salado",
    image: "scon_relleno.jpg",
    code: null,
    product_name_in_dashboard: "Scon relleno cheddar y lomito",
  },
  {
    category: "salado",
    image: "scon_relleno.jpg",
    code: null,
    product_name_in_dashboard: "Scon relleno cheddar y panceta",
  },
  {
    category: "salado",
    image: "scon_relleno.jpg",
    code: null,
    product_name_in_dashboard: "Scon relleno provolone y cheddar",
  },
  {
    category: "salado",
    image: "scon_relleno.jpg",
    code: null,
    product_name_in_dashboard: "Scon relleno provolone y jamon",
  },
  {
    category: "salado",
    image: "tostado.jpg",
    code: "706",
    product_name_in_dashboard: "Tostado cheddar y lomito",
  },
  {
    category: "salado",
    image: "tostado.jpg",
    code: "705",
    product_name_in_dashboard: "Tostado cheddar y panceta",
  },
  {
    category: "salado",
    image: "tostado.jpg",
    code: "708",
    product_name_in_dashboard: "Tostado provolone y cheddar",
  },
  {
    category: "salado",
    image: "tostado.jpg",
    code: "710",
    product_name_in_dashboard: "Tostado provolone y jamon",
  },

  {
    category: "dulce",
    code: "44",
    image: "croissant.jpg",
  },
  {
    category: "jugos",
    code: "605",
    image: "limonada.jpg",
  },
  {
    category: "jugos",
    code: "600",
    image: "exprimido_de_naranja.jpg",
  },
  // {
  //   category: ["dulce", "salado"],
  //   image: "media_docena_medialunas.jpg",
  //   product_name_in_dashboard: "Media docena de medialunas",
  // },
  // {
  //   category: ["dulce", "salado"],
  //   image: "docena_medialunas.jpg",
  //   product_name_in_dashboard: "Docena de medialunas",
  // },
  {
    category: "vasos",
    product_name_in_dashboard: "Vaso térmico moments",
    image: "vaso_moments_recargable.jpg",
  },
].map((p) => ({
  ...p,
  name:
    p.product_name_in_dashboard ||
    p.image
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
      options: p?.options
        ? p.options.map((option) => ({
            ...option,
            id: products.find(
              (prod) =>
                prod.attributes.code === option?.code ||
                prod.attributes.name === option?.product_name_in_dashboard
            )?.id,
            points_required: products.find(
              (prod) =>
                prod.attributes.code === option?.code ||
                prod.attributes.name === option?.product_name_in_dashboard
            )?.attributes?.price,
          }))
        : null,
    }));
  },
  {
    maxAge: 1000 * 60 * 60, // 1 hs
  }
);
