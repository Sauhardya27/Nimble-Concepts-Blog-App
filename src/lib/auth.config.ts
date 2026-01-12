import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectToDb } from "./utils";
import { User } from "./models";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        try {
          await connectToDb();
          const user = await User.findOne({
            $or: [
              { username: credentials.username },
              { email: credentials.username },
            ],
          });

          if (!user || !user.password) throw new Error("User not found");

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isPasswordCorrect) throw new Error("Invalid password");

          return {
            id: user._id.toString(),
            username: user.username,
            email: user.email,
            img: user.img,
            isAdmin: user.isAdmin,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "github") {
        try {
          await connectToDb();
          const dbUser = await User.findOne({ email: user.email });

          if (!dbUser) {
            const newUser = new User({
              username: (profile as any).login || user.name,
              email: user.email,
              img: user.image,
              isAdmin: false,
              password: await bcrypt.hash(Math.random().toString(36).slice(-8), 10),
            });
            await newUser.save();
          }
        } catch (err) {
          console.error("GitHub sign-in error:", err);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = (user as any).isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as any).id = token.id;
        (session.user as any).isAdmin = token.isAdmin;
      }
      return session;
    },
  },
  pages: { signIn: "/login" },
  session: { strategy: "jwt" },
};