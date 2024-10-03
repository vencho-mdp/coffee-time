import db from "../db/db";

const url = "https://api.fu.do/v1alpha1/sales?sort=-createdAt&include=items%2Ctable.room"
const url_for_adding_item = "https://api.fu.do/v1alpha1/items";

function generateUUID() {
  // Generate UUID version 4
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, // Generate a random number between 0 and 15
          v = c === 'x' ? r : (r & 0x3 | 0x8); // Use 4 for the 13th digit and random values for the rest
    return v.toString(16); // Convert to hexadecimal
  });
}

export default defineEventHandler(async (event) => {
  try {
     const FUDO_API_TOKEN = await getApiToken(); 
  const body = await readBody(event);
  const code = body.code;

  // Query the database to get the product_id associated with the provided code
  const promoCode = await db('promo_codes').where({ name: code, used:false }).first();

  if (!promoCode) {
    throw new Error('Invalid promo code');
  }

  const productId = promoCode.product_id;

  // Fetch sales data
  const salesData = await $fetch(url, {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'authorization': `Bearer ${FUDO_API_TOKEN}`
    }
  });
// return salesData
  // Find the sale in progress
  const sale = salesData?.data.find(e => e.type === 'Sale' && e.attributes.saleState === 'IN-COURSE').id;

  // Add the item to the sale
  await $fetch(url_for_adding_item, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'authorization': `Bearer ${FUDO_API_TOKEN}`
    },
    body: {
      "data": {
        "type": "Item",
        "attributes": {
          "comment": "Canjeado por puntos",
          "price": 0,
          "quantity": 1,
          "origin": "MOBILE",
          "uuid": generateUUID()
        },
        "relationships": {
          // "priceList": {
          //   "data": {
          //     "id": "0",
          //     "type": "PriceList"
          //   }
          // },
          "product": {
            "data": {
              "id": productId, // Use the product ID obtained from the promo code
              "type": "Product"
            }
          },
          "sale": {
            "data": {
              "id": sale,
              "type": "Sale"
            }
          }
        }
      }
    }
  });
   await db('promo_codes').where({ name: code }).update({
    used:true
   })

  return {
    message: 'success'
  };
  } catch (error) {
    return {error: error.response} 
  }
 
});