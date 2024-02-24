import React from "react";
import Image from "next/image";
import Link from "next/link";
import background from "@/assets/images/background.jpeg";
import Heading from "@/components/Heading/heading";

const page = async () => {
  return (
    <main>
      <div className="bg-blue relative">
        <Image
          className="opacity-35 w-full h-[400px]"
          src={background}
          alt="Background Image"
        />
      </div>

      <div className="-mt-52 z-20 relative ">
        <form
          action=""
          className="mx-auto 2xs:w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-10 bg-white flex flex-col gap-5  rounded-2xl  shadow-xl"
        >
          <Heading text="Partnership" />

          <span className="flex flex-col">
            <label htmlFor="">Account Administrator First Name</label>
            <input
              type="text"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="">Account Administrator Last Name</label>
            <input
              type="text"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          <span className="flex flex-col">
            <label htmlFor="">Account Administrator Business Email</label>
            <input
              type="email"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          <span className="flex flex-col ">
            <label htmlFor="">Account Administrator Account Title</label>
            <input
              type="text"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          <span className="flex flex-col ">
            <label htmlFor="">Account Administrator Phone (optional)</label>
            <input
              type="number"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
            />
          </span>

          <span className="flex gap-5 items-baseline">
            <input type="checkbox" required/>
            <p className="text-blue font-semibold">
              By checking this box, you are agreeing to and acknowledging our
              Pax8 Partner Terms and state that you have read and understood
              such Terms.
            </p>
          </span>
          <p>
            By completing this form and selecting this box, you confirm that you
            have the authority to sign a binding Partner Agreement on behalf of
            your organization
          </p>
          <Link
            className="bg-blue px-12 text-white font-semibold rounded-full py-2 mx-auto w-fit"
            href={"/pages/signup/step5"}
          >
            <button>Continue</button>
          </Link>
        </form>
      </div>
    </main>
  );
};

export default page;
