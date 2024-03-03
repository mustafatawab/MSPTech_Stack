import Image from "next/image";
import React from "react";
import background from "@/assets/images/background.jpeg";
import Heading from "@/components/Heading/heading";
import Link from "next/link";
const page = () => {
  return (
    <main className="">
      <div className="bg-blue relative w-screen">
        <Image
          className="opacity-35 w-full h-[400px] object-cover "
          src={background}
          alt="Background Image"
        />
      </div>

      <div className="-mt-52 z-20 relative ">
        <form
          action=""
          className="mx-auto 2xs:w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-10 bg-white flex flex-col gap-5  rounded-2xl  shadow-xl"
        >
          <Heading text="Sign In" />
          <p className="text-[#0F1519CC] text-2xl font-semibold">Lets Get Started</p>
          <span className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="email@example.com"
              className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold border border-black"
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="**********"
              className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold border border-black"
            />
          </span>

          <Link className="text-[#0F1519CC] font-semibold text-lg" href={"#"}>Forgot Password?</Link>
          <button className="bg-blue px-12 text-white font-semibold rounded-full py-2 mx-auto w-fit">Login</button>
          <p>Do not have any account ? <Link className="text-blue font-bold text-xl" href={"/pages/signup"}>Sign Up</Link> </p>
        </form>
      </div>
    </main>
  );
};

export default page;
