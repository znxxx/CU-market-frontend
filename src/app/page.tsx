"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

function StartPage() {
  const { data: session } = useSession();
  return (
    <div className="bg-[#353966] min-h-screen flex justify-center place-items-center">
      {session?.user ? (
        <>
          <p>{session.user.studentId}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (  
        <button
          onClick={() => signIn()}
          className="rounded-full bg-[#464C88] p-10 hover:drop-shadow-xl hover:bg-[#767BB8] hover:scale-110 transition-all"
        >
          <Image
            src="/images/Cu-blackmarket-logo.svg"
            alt="logo"
            className="self-center"
            width={195}
            height={115}
          />
        </button>
      )}
    </div>
  );
}
export default StartPage;

