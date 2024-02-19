import React from "react";
import Image from "next/image";
import Link from "next/link";
import background from "@/assets/images/background.jpeg";
import Heading from "@/components/Heading/heading";

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
          <Heading text="Contact Info" />

          <span className="flex flex-col">
            <label htmlFor="">Company Name</label>
            <input
              type="text"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          <span className="flex flex-col">
            <label htmlFor="">Company Domain</label>
            <input
              type="text"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              required
            />
          </span>

          <span className="flex gap-10">
            <p>Are you part of Franchise ? </p>
            <span className="flex justify-center items-center gap-3">
              <label htmlFor="yes">Yes</label>
              <input type="radio" id="yes" name="franchise" />
            </span>
            <span className="flex justify-center items-center gap-3">
              <label htmlFor="no">No</label>
              <input type="radio" id="no" name="franchise" />
            </span>
          </span>

          <select
            name="country"
            id="country"
            className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
            required
          >
            <option
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold"
              value="country"
              defaultValue={"Select Country"}
              disabled
            >
              Select Country
            </option>

            <option
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold"
              value="country"
            >
              Pakistan
            </option>
            <option
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold"
              value="country"
            >
              USA
            </option>
            <option
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold"
              value="country"
            >
              India
            </option>
            <option
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold"
              value="country"
            >
              Other
            </option>
          </select>

          <div className="flex justify-between ">
            <span className="flex flex-col  w-1/5">
              <label htmlFor="">City</label>
              <input
                type="text"
                placeholder=""
                className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              />
            </span>

            <span className="flex flex-col w-1/5">
              <label htmlFor="">State</label>
              <input
                type="text"
                placeholder=""
                className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              />
            </span>

            <span className="flex flex-col w-1/5">
              <label htmlFor="">Postal Code</label>
              <input
                type="text"
                placeholder=""
                className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              />
            </span>

            <span className="flex flex-col w-1/5">
              <label htmlFor="">Currency</label>
              <input
                type="text"
                placeholder=""
                className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
              />
            </span>
          </div>
          <span className="flex flex-col ">
            <label htmlFor="">Company Headquater Address</label>
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

          <Link className="text-[#0F1519CC] font-semibold text-lg" href={"#"}>
            Forgot Password?
          </Link>
          <button className="bg-blue px-12 text-white font-semibold rounded-full py-2 mx-auto w-fit">
            Login
          </button>
          <p>
            Don't have any account ?{" "}
            <Link
              className="text-blue font-bold text-xl"
              href={"/pages/signup"}
            >
              Sign Up
            </Link>{" "}
          </p>
        </form>
      </div>
    </main>
  );
};

export default page;
