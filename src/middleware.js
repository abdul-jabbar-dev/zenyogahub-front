export { default } from "next-auth/middleware"
process.env.NEXTAUTH_URL = 'http://localhost:3000'
process.env.NEXTAUTH_SECRET = 'abc'
export const config = { matcher: ["/dashboard"] }