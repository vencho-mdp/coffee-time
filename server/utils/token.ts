import db from "../db/db";

export const getApiToken = async () => {
    const { FUDO_API_KEY, FUDO_API_SECRET } = useRuntimeConfig();
  // First, check if the token is still valid by querying the table
  const result = await db('api_token').first();
  const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds

  if (result && new Date(result.expires_at).getTime() / 1000 > currentTime) {
    // If the token is still valid, return it
    return result.token;
  }
  // If the token is expired, make the API call to refresh it
  try {
    const response = await $fetch('https://auth.fu.do/api', {
      method: 'POST',
      body: {
        apiKey: FUDO_API_KEY,
        apiSecret: FUDO_API_SECRET,
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const { token, exp } = response;

    // Convert the expiration timestamp to a Date object
    const expiresAt = new Date((exp - 4 * 3600) * 1000); // Subtract 3 hours (3 * 3600 seconds)

    // Update the token and expiration in the database
     await db('api_token').del()
    await db('api_token').insert({
      token,
      expires_at: expiresAt,
    });

    // Return the new token
    return token;
  } catch (error) {

    console.error('Error fetching API token:', error);
    throw new Error('Failed to refresh API token');
  }
};