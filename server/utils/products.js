export default [
  {
    category: "café",
    points_required: 3500,
    image: "cafe_xl.jpg",
    product_name_in_dashboard: "Cafe con leche",
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
    product_name_in_dashboard: "Muffin Limón",
  },
  {
    category: "salado",
    points_required: 1900,
    image: "medialuna_de_jyq.jpeg",
    product_name_in_dashboard: "D. Medialuna con jamon y queso",
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
    product_name_in_dashboard: "Torta Bruce",
  },
  {
    category: "Dulce",
    points_required: 3500,
    image: "porcion_budin_limon_y_amapolas.jpg",
    product_name_in_dashboard: "Budin limon y amapola",
  },
  {
    category: "Dulce",
    points_required: 5600,
    image: "porcion_de_chesscake_frutos_rojos.jpeg",
    product_name_in_dashboard: "Cheesecake Frutos Rojos",
  },
  {
    category: "Dulce",
    points_required: 6600,
    image: "porcion_red_velvet.jpg",
    product_name_in_dashboard: "D. Red Velvet",
  },
  {
    category: "salado",
    points_required: 3630,
    image: "scon_de_queso.jpg",
    product_name_in_dashboard: "D. Scon de queso",
  },
  {
    category: "salado",
    points_required: 3600,
    image: "scon_relleno.jpg",
    product_name_in_dashboard: "Scon relleno cheddar y lomito",
  },
  {
    category: "salado",
    points_required: 7000,
    image: "tostado_jamon_y_provolone.jpg",
    product_name_in_dashboard: "Tostado de jamon y provolone",
  },
].map((p) => ({
  ...p,
  name: p.image
    .split(".")[0] // Elimina la extensión del archivo
    .replace(/_/g, " ") // Reemplaza guiones bajos por espacios
    .replace(/\b\w/g, (c) => c.toUpperCase()), // Capitaliza la primera letra de cada palabra
}));
