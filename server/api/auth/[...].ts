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
          const isNewUser = await db("users").where({ email: profile.email });
          if (isNewUser.length === 0) {
            const newUser = await db("users")
              .insert({
                email: profile.email,
                name: profile.name,
                avatar_url: profile.picture,
              })
              .returning("id");
            token.id = newUser[0].id;
          } else {
            token.id = isNewUser[0].id;
          }
        }
        return token;
      } catch (error) {
        console.log(error);
      }
    },
    async session({ session, token }) {
      session.user = { ...session.user, id: token.id };
      // console.log(session)
      return session;
    },
  },
});