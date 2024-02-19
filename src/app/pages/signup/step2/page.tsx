import Image from "next/image";
import React from "react";
import background from "@/assets/images/background.jpeg";
import Heading from "@/components/Heading/heading";
import Link from "next/link";
const page = () => {
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
          className="mx-auto w-1/2 p-10 bg-white flex flex-col gap-5  rounded-2xl  shadow-xl"
        >
          <Heading text="Business model" />
          <p className="text-[#0F1519CC] text-2xl font-semibold">
            Please select the option that best applies to your business model
          </p>
          <span className="flex items-center text-[#0F1519CC]  gap-6 text-lg ">
            <input type="radio" name="model" className="" />
            <p>
              We invoice, support, and resell services to our clients on a
              monthly reoccurring model
            </p>
          </span>

          <span className="flex items-center text-[#0F1519CC]  gap-6 text-lg">
            <input type="radio" name="model" required />
            <p>
              We support our clients and invoice them for time and materials
            </p>
          </span>

          <span className="flex items-center text-[#0F1519CC]  gap-6 text-lg">
            <input type="radio" name="model" required />
            <p>
              We utilize a referral model and prefer not to invoice or support
              our clients directly
            </p>
          </span>

          <span className="flex flex-col">
            <label htmlFor="">Business Classification</label>
            <input
              type="text"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          
          <Link
            className="bg-blue px-12 text-white font-semibold rounded-full py-2 mx-auto w-fit"
            href={"/pages/signup/step3"}
          >
            <button>Continue</button>
          </Link>
        </form>
      </div>
    </main>
  );
};

export default page;