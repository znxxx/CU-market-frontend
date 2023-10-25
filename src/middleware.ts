export { default } from "next-auth/middleware";

export const config = { matcher: ["/x/:path*"] };

console.log("middleware is running");
