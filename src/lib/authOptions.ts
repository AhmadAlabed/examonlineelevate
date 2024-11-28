import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID as string,
    //   clientSecret: process.env.GITHUB_SECRET as string,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const res = await fetch(
            "https://exam.elevateegy.com/api/v1/auth/signin",
            {
              method: "POST",
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
              headers: {
                "content-type": "application/json",
              },
            }
          );
          const data = await res.json();
          if (!data) {
            throw new Error("Something went wrong");
          }
          if (data.message !== "success") {
            throw new Error(data.message || "An error occurred during sign-in");
          }
          return data;
        } catch (error: any) {
          throw new Error(
            error.message || "An unexpected error occurred during sign-in"
          );
        }
      },
    }),
  ],
  // callbacks: {
  //   async signIn({ account, profile }) {
  //     if (account?.provider === "github") {
  //       await connectToDatabase();
  //       const existingUser = await User.findOne({ email: profile?.email });
  //       if (!existingUser) {
  //         await User.create({ email: profile?.email, name: profile?.name });
  //       }
  //     }
  //     return true;
  //   },
  // async jwt({ token, user }) {
  //   if (user) {
  //     token.id = user.id;
  //     token.email = user.email;
  //   }
  //   return token;
  // },
  // async session({ session, token }) {
  //   if (token) {
  //     session.user = {
  //       email: token.email,
  //       name: token.name,
  //       image: token.picture,
  //     };
  //   }
  //   return session;
  // },
  // },
  pages: {
    signIn: "/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
