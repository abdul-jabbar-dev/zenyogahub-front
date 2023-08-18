import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import { dbCon } from "../connection"
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
    secret: 'abc',
    providers: [
        FacebookProvider({
            clientId: "1063837844779101",
            clientSecret: 'e7fa2700182a4922bed4e548c70c2656'
        }),
        GoogleProvider({
            clientId: "1041988886191-jiflps2adadg6fv2cln2tinmq654pv4d.apps.googleusercontent.com",
            clientSecret: "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"
        }),
        CredentialsProvider({
            name: "Login Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                console.log(credentials)
            }
        })
    ],
 
    adapter: MongoDBAdapter(dbCon),
    pages: {
        signIn: "/start"
    }
}
export default NextAuth(authOptions)

