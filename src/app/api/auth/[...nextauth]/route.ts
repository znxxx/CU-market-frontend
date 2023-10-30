import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        studentId: { label: "StudentId", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { studentId, password } = credentials as any;
        const res = await fetch("http://localhost:4000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            studentId,
            password,
          }),
        });

        const user = await res.json();

        if (res.ok && user) {
          const resRegister = await fetch("http://localhost:4000/users/info", {
            headers: { Authorization: `Bearer ${user.access_token}` },
          });
          const registerInfo = await resRegister.json();

          const resPaotung = await fetch(
            "https://paotooong.thinc.in.th/v1/auth/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: registerInfo.email,
                password,
              }),
            }
          );

          const paotungToken = await resPaotung.json();

          await fetch(
            `http://localhost:4000/users/updateLightBulb?studentId=${studentId}&token=${paotungToken.token.accessToken}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.access_token}`,
              },
            }
          );

          return {
            ...user,
            studentId,
            paotungToken: paotungToken.token.accessToken,
          } as User;
        } else {
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    newUser: "/register",
  },

  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.

      session.user.access_token = token.access_token as string;
      session.user.studentId = token.studentId as string;
      session.user.paotungToken = token.paotungToken as string;

      return session;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.access_token = user.access_token;
        token.studentId = user.studentId;
        token.paotungToken = user.paotungToken;
      }

      return token;
    },
  },
});

export { handler as GET, handler as POST };
