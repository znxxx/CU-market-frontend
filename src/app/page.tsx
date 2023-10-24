"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function StartPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status !== "loading" && !session?.user) router.replace("/login");
  }, [router, session?.user, status]);
  if (!session?.user) return null;

  router.push("/u");
  return null;
}
export default StartPage;
