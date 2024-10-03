import { NuxtAuthHandler } from "#auth";
import GoogleProvider from "next-auth/providers/google";
import db from "../../db/db";

export default NuxtAuthHandler({
  secret: "your-production-secret-ABUEEEEELA-LALALALALALALALALALALALA-ABUELA",
  pages: {
    signIn: '/iniciar-sesion'
  },
  providers: [
    GoogleProvider.default({
      clientId:
        "160266287413-v1ga80qm0lp1er34g6rngv8g2leoua2r.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],

  callbacks: {
    async jwt({ token, account, profile }) {
      try {
        if (account) {
          token.accessToken = account.access_token;
          token.name = profile.name;
          token.email = profile.email;
        }
        if (profile) {
          // Check if user exists or create a new user
          const isNewUser = await db("users").where({ email: profile.email });
          if (isNewUser.length === 0) {
            const newUser = await db("users")
              .insert({
                email: profile.email,
                name: profile.name,
                avatar_url: profile.picture,
              })
              .returning("id");
              await db("loyalty_points")
              .insert({
                user_id:  newUser[0].id,
                points_balance: 3000,
              })
            token.id = newUser[0].id;
          } else {
            token.id = isNewUser[0].id;
          }

          // Fetch points for the user
          const userPoints = await db("loyalty_points")
            .where({ user_id: token.id })
            .first();

          // Attach points balance to the token
          token.pointsBalance = userPoints ? userPoints.points_balance : 0;
        }
        return token;
      } catch (error) {
        console.log(error);
      }
    },
    async session({ session, token }) {
      session.user = { ...session.user, id: token.id, pointsBalance: token.pointsBalance };
      return session;
    },
  },
});
