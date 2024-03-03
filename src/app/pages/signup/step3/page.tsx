import React from "react";
import Image from "next/image";
import Link from "next/link";
import background from "@/assets/images/background.jpeg";
import Heading from "@/components/Heading/heading";

const page = async () => {
  return (
    <main>
      <div className="bg-blue relative w-screen">
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
          <Heading text="Business Details" />

          <span className="flex flex-col">
            <label htmlFor="">Number of Employes</label>
            <input
              type="number"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="">Number of Clients/Customers</label>
            <input
              type="number"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          <span className="flex flex-col">
            <label htmlFor="">Client Verticle Focus</label>
            <input
              type="text"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

         

          <span className="flex flex-col ">
            <label htmlFor="">End Points Under Management</label>
            <input
              type="text"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          <span className="flex flex-col ">
            <label htmlFor="">Company Phone</label>
            <input
              type="number"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          <span className="flex flex-col ">
            <label htmlFor="">Microsoft Competency</label>
            <input
              type="number"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          <span className="flex flex-col ">
            <label htmlFor="">Primary Interest</label>
            <input
              type="number"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>
          <span className="flex gap-10">
            <p>Do You Have a PSA tool ? </p>
            <span className="flex justify-center items-center gap-3">
              <label htmlFor="yes">Yes</label>
              <input type="radio" id="yes" name="franchise" />
            </span>
            <span className="flex justify-center items-center gap-3">
              <label htmlFor="no">No</label>
              <input type="radio" id="no" name="franchise" />
            </span>
          </span>
          <Link
            className="bg-blue px-12 text-white font-semibold rounded-full py-2 mx-auto w-fit"
            href={"/pages/signup/step4"}
          >
            <button>Continue</button>
          </Link>
        </form>
      </div>
    </main>
  );
};

export default page;
