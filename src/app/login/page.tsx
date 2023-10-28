import Link from "next/link";
import Image from "next/image";
import React from "react";
import { cookies } from "next/headers";
import { getCsrfToken } from "next-auth/react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface user {
  studentId: number;
  password: string;
  remember: boolean;
}

const LoginPage = async () => {
  // const session = await getServerSession();
  // if (session) {
  //   return redirect("/u");
  // }
  const csrfToken = await getCsrfToken({
    req: {
      headers: {
        cookie: cookies().toString(),
      },
    },
  });
  return (
    <section className="bg-[#353966] min-h-screen flex flex-col justify-center place-items-center px-5">
      <div className="p-8">
        <Image
          src="/images/Cu-blackmarket-logo.svg"
          alt="logo"
          className="self-center"
          width={195}
          height={115}
        />
      </div>
      <form
        method="post"
        action="/api/auth/callback/credentials"
        className="text-neutral-100 text-xl font-medium"
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <div className="flex flex-col justify-center">
          <label htmlFor="studentId" className="ml-7 mt-3">
            Student ID
          </label>
          <input
            type="text"
            name="studentId"
            className="self-stretch shadow-[4px_4px_6px_5px_rgba(0,0,0,0.15)] bg-[#40477B] mt-2.5 pt-5 pb-5 px-5 rounded-[50px] max-md:max-w-full max-md:pl-2"
          />
        </div>
        <div className="flex flex-col justify-center">
          <label htmlFor="password" className="ml-7 mt-3">
            Password
          </label>
          <input
            type="text"
            name="password"
            className="self-stretch shadow-[4px_4px_6px_5px_rgba(0,0,0,0.15)] bg-[#40477B] mt-2.5 pt-5 pb-5 px-5 rounded-[50px] max-md:max-w-full max-md:pl-2"
          />
        </div>
        <button
          type="submit"
          className="shadow-2xl  w-[350px] max-w-full  mt-12 max-md:mt-10"
        >
          <div className="bg-[#FF8BBC] rounded-[50px] py-5 shadow-black shadow-inner">
            <span className="text-stone-100 text-xl font-medium ">Login</span>
          </div>
        </button>
      </form>
      <Link href="/register" className="self-center w-[350px] max-w-full mt-4">
        <div className="bg-[#353966] self-stretch flex w-full grow flex-col py-5 rounded-[50px] border-[5px] border-solid border-[#FF8BBC]">
          <span className="text-stone-100 text-xl font-medium self-center">
            Create account
          </span>
        </div>
      </Link>
      {/* <button
        onClick={() => linkPage("/register")}
        className="self-center flex w-[350px] max-w-full grow flex-col mt-4"
      >
        Create account
      </button> */}
    </section>
  );
};

export default LoginPage;
