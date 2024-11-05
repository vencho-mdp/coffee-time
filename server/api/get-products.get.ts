import getProducts from "../utils/products";


export default defineCachedEventHandler(async (event) => {


  return await getProducts()
}, { maxAge: 60 * 60 * 24 /* 1 day */ });
