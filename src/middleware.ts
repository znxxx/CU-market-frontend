export { default } from "next-auth/middleware";

export const config = { matcher: ["/u/:path*"] };

console.log("middleware is running");
