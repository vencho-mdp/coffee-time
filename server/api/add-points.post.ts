import { getServerSession } from '#auth'

import db from '../db/db';
export default defineEventHandler(async (event) => {
  try {
    // This event receives a parameter "points" with the amount to add
  // to the user's points
  const amount_of_points = getRouterParam(event, 'points')
  const {user} = await getServerSession(event)
  // Update the points_balance in the loyalty_points table
  const updatedPoints = await db('loyalty_points')
    .where({ user_id: user.id })
    .increment('points_balance', Number(amount_of_points) )
    .returning('*');
// case where the user does not have a points balance yet
if (updatedPoints.length === 0) {
  await db('loyalty_points')
    .insert({ user_id: user.id, points_balance: Number(amount_of_points) });
}

  // Return the updated points balance
  return {new_points: updatedPoints[0], added_points: (amount_of_points) };

  } catch (error) {
    console.log(error)
    return error
  }
  });
