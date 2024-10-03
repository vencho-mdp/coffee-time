import { getServerSession } from "#auth";
import db from "../db/db";

export default defineEventHandler(async (event) => {
  try {
    const { user } = await getServerSession(event);

    const user_points_data = await db("loyalty_points")
      .where({ user_id: user.id })
      .first();

    return { points: user_points_data.points_balance };
  } catch (error) {
    return { error: error.response };
  }
});
