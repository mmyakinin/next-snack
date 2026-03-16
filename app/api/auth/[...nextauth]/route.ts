import { prisma } from "@/prisma/prisma-client";
import { compare } from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "E-Mail", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }

                const values = {
                    email: credentials.email,
                };

                const findUser = await prisma.user.findFirst({
                    where: {
                        email: values.email,
                    },
                });

                if (!findUser) {
                    return null;
                }

                const isPasswordValid = await compare(
                    credentials.password,
                    findUser.password,
                );

                if (!isPasswordValid) {
                    return null;
                }

                if (!findUser.verified) {
                    return null;
                }

                return {
                    id: findUser.id,
                    name: findUser.fullName,
                    email: findUser.email,
                    role: findUser.role,
                };
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token }) {
            const findUser = await prisma.user.findFirst({
                where: {
                    email: token.email!,
                },
            });

            if (findUser) {
                token.id = String(findUser.id);
                token.name = findUser.fullName;
                token.email = findUser.email;
                token.role = findUser.role;
            }

            return token;
        },
        session({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
                session.user.role = token.role;
            }

            return session;
        },
    },
});

export { handler as GET, handler as POST };
