import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { users } from "@/lib/users";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      async authorize(credentials) {
        const user = users.find(
          (u) =>
            u.email === credentials.email &&
            u.password === credentials.password,
        );

        if (user) {
          // Explicitly return the object with the role
          return {
            id: user.id,
            email: user.email,
            role: user.role as "USER" | "ADMIN" | "SUPER_ADMIN",
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
    if (user) {
      // TypeScript now understands that user.role matches the token.role type
      token.role = user.role;
    }
    return token;
  },
  session({ session, token }) {
    if (session.user) {
      // Cast the token role to the specific union, NOT just 'string'
      session.user.role = token.role as "USER" | "ADMIN" | "SUPER_ADMIN";
    }
    return session;
  },
  },
});
