import { getServerSession } from '#auth';
import db from '../db/db';
const url = "https://api.fu.do/v1alpha1/sales?sort=-createdAt&include=items%2Ctable.room"
 function getArgentineTimeISO() {
  const offset = -3 * 60; // Argentine time offset in minutes (UTC-3)
  const now = new Date();
  
  // Adjust time to Argentine Time (UTC-3)
  const argentinaTime = new Date(now.getTime() + offset * 60000);

  // Start of today in Argentine Time
  const startOfToday = new Date(argentinaTime.getFullYear(), argentinaTime.getMonth(), argentinaTime.getDate());
  // End of today in Argentine Time
  const endOfToday = new Date(argentinaTime.getFullYear(), argentinaTime.getMonth(), argentinaTime.getDate() + 1, 0, 0, -1);

  return {
    startOfTodayISO: startOfToday.toISOString(),
    endOfTodayISO: endOfToday.toISOString()
  };
}

export default defineEventHandler(async (event) => {
 
  try {
  const FUDO_API_TOKEN = await getApiToken(); 
    const salesData = await $fetch(url, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'authorization': `Bearer ${FUDO_API_TOKEN}`
      }
    });
    const sale = salesData?.data.filter(e => e.type === 'Sale')[0]

    if (!sale) {
      return { message: 'No sales data found' };
    }

    // Check if the sale ID is already used
    const isSaleUsed = await db('used_sales_ids').where({ sale_id: sale.id }).first();

    if (isSaleUsed) {
      return { addedPoints: 0 };
    }

    const summedPrices = sale.attributes.total;
    const amount_of_points = Math.round(summedPrices * 0.1);

    const { user } = await getServerSession(event);
    // Update the points_balance in the loyalty_points table
    const updatedPoints = await db('loyalty_points')
      .where({ user_id: user.id })
      .increment('points_balance', amount_of_points)
      .returning('*');

    // Case where the user does not have a points balance yet
    if (updatedPoints.length === 0) {
      await db('loyalty_points')
        .insert({ user_id: user.id, points_balance: amount_of_points });
    }

    // Insert the sale ID into the used_sales_ids table to mark it as used
    await db('used_sales_ids').insert({ sale_id: sale.id });

    // Return the updated points balance
    return { new_points: updatedPoints[0], added_points: amount_of_points, sale_id: sale.id };

  } catch (error) {
    // console.error(error);
    return {b:2, a: error, eerror: error.response  };
  }
});
