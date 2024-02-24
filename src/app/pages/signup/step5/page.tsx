import React from "react";
import Image from "next/image";
import Link from "next/link";
import background from "@/assets/images/background.jpeg";
import Heading from "@/components/Heading/heading";
const page = () => {
  return (
    <>
      <div className="bg-blue relative">
        <Image
          className="opacity-35 w-full h-[400px]"
          src={background}
          alt="Background Image"
        />
      </div>
      <div className="-mt-52 z-20 relative ">
        <form
          action=" "
          className="mx-auto 2xs:w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-10 bg-white flex flex-col gap-5  rounded-2xl  shadow-xl"
        >
          <Heading text="Get Ready To Go Big" />
          <span className="flex flex-col">
            <label htmlFor="">How did you hear about us? (optional)</label>
            <input
              type="text"
              placeholder=""
              className="bg-[#ECEBF6] rounded-xl p-2  outline-none font-semibold border border-black"
            />
          </span>

          <div className="space-y-2">
            <p className="text-[#0F1519CC] font-semibold">
              Please select the option that best applies to your business model
            </p>

            <span className="flex justify-start items-center gap-5">
                <input type="radio" name="model" value={'asap'}/>
                <p className="text-[#0F1519CC] " >As soon as possible</p>
            </span>
            <span className="flex justify-start items-center gap-5">
                <input type="radio"  name="model" value={"Next Week"}/>
                <p className="text-[#0F1519CC] " >Sometime Next Week</p>
            </span>

            <span className="flex justify-start items-center gap-5">
                <input type="radio"  name="model" value={'Next Month'}/>
                <p className="text-[#0F1519CC] " >Next Month</p>
            </span>
          </div>

          <div className="space-y-2">
            <p className="text-[#0F1519CC] font-semibold">
            Preferred time of the Day
            </p>

            <span className="flex justify-start items-center gap-5">
                <input type="radio" name="time" value={'Morning'}/>
                <p className="text-[#0F1519CC] " >Morning</p>
            </span>
            <span className="flex justify-start items-center gap-5">
                <input type="radio"  name="time" value={"AfterNoon"}/>
                <p className="text-[#0F1519CC] " >Afternoon</p>
            </span>

           
          </div>

          <Link
            className="bg-blue px-12 text-white font-semibold rounded-full py-2 mx-auto w-fit"
            href={"/pages/signup/submitted"}
          >
            <button>Continue</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default page;
