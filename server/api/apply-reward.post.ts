const url = "https://api.fu.do/v1alpha1/sales?sort=id%2C-id%2CcreatedAt%2C-createdAt&include=items%2Ctable.room";
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
        const { FUDO_API_TOKEN } = useRuntimeConfig(event)
  const body = await readBody(event)  
  const code = body.code
     const salesData = await $fetch(url, {
    method: 'GET',
    headers: {
        'accept': 'application/json',
        'authorization': `Bearer ${FUDO_API_TOKEN}`
    }
});const sale =  salesData?.data.find(e => e.type === 'Sale' && e.attributes.saleState === 'IN-COURSE').id

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
      "priceList": {
        "data": {
          "id": "1",
          "type": "PriceList"
        }
      },
      "product": {
        "data": {
          "id": "5",
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
return {
  message: 'success'
}
})
