import { ENV } from "@/config/envConfig";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: ENV.AUTH_GOOGLE_ID,
      clientSecret: ENV.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      name: "Custom Phone Login",
      credentials: {
        phone: { label: "Phone", type: "text" },
        email: { label: "Email", type: "text" },
        lastName: { label: "Last Name", type: "text" },
        firstName: { label: "First Name", type: "text" },
        image: { label: "Image", type: "text" },
      },
      async authorize(credentials) {
        const { phone, email, lastName, firstName, image } = credentials || {};
        return { phone, email, lastName, firstName, image };
      },
    }),
  ],
  secret: ENV.SECRET_KEY_JWT,
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 0,
  },
  callbacks: {
    async session({ session, token }) {
      try {
        if (session.user) {
          session.user.idToken = token.idToken;
          session.user.firstName = token.firstName;
          session.user.lastName = token.lastName;
          session.user.id = token.id;
          session.user.image = token.image;
          session.user.phone = token.phone;
        }
        return session;
      } catch (error) {
        console.error("Error en la session del callBack:", error);
      }

      return session;
    },
    async jwt({ token, user, trigger, session, account }) {
      if (user) {
        token.phone = user.phone;
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.image = user.image;
      }
      if (trigger === "update" && session?.user) {
        token.firstName = session.user.firstName;
        token.lastName = session.user.lastName;
        token.image = session.user.image;
        token.phone = session.user.phone;
        token.isVerifyPhone = session.user.isVerifyPhone;
      }
      if (account) {
        token.idToken = account.id_token;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
