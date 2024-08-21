import { getServerSession } from '#auth'
import db from '../db/db';
const url = "https://api.fu.do/v1alpha1/sales?sort=id%2C-id%2CcreatedAt%2C-createdAt&include=items%2Ctable.room";
const usedIds = []

export default defineEventHandler(async (event) => {
  try {
      const { FUDO_API_TOKEN } = useRuntimeConfig(event)
      const salesData = await $fetch(url, {
    method: 'GET',
    headers: {
        'accept': 'application/json',
        'authorization': `Bearer ${FUDO_API_TOKEN}`
    }
});

const sale =  salesData?.data.filter(e => e.type === 'Sale').at(-1)
const summedPrices = sale.attributes.total
if(usedIds.includes(sale.id)) {
  return {
  addedPoints: 0,
}
} else {
  usedIds.push(sale.id)
}
      const amount_of_points =  Math.round(summedPrices * 0.3)

  const {user} = await getServerSession(event)
  // Update the points_balance in the loyalty_points table
  const updatedPoints = await db('loyalty_points')
    .where({ user_id: user.id })
    .increment('points_balance', (amount_of_points) )
    .returning('*');
// case where the user does not have a points balance yet
if (updatedPoints.length === 0) {
  await db('loyalty_points')
    .insert({ user_id: user.id, points_balance: (amount_of_points) });
}

  // Return the updated points balance
  return {new_points: updatedPoints[0], added_points: (amount_of_points) };

  } catch (error) {
    console.log(error)
    return error
  }
  });
