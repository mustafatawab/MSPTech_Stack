import React from "react";
import Image from "next/image";
import Heading from "@/components/Heading/heading";

import image1 from "@/assets/svgs/home/scheduleDemo/image.svg";
import image2 from "@/assets/svgs/home/scheduleDemo/image2.svg";
import image3 from "@/assets/svgs/home/scheduleDemo/image3.svg";

const ScheduleDemo = () => {
  return (
    <section className="w-full lg:relative space-y-12">
      <Heading text="Schedule a Demo" />
      <div className="bg-blue flex flex-wrap  md:justify-center xs:justify-center lg:justify-start xs:items-center md:items-center lg:items-end p-5 -z-30 rounded-2xl gap-10">
        <div className="">
          <Image src={image1} alt="" />
        </div>
        <div className="flex flex-wrap md:static lg:relative ">
          <Image src={image2} className="z-20" alt="" />
          <Image className="xs:hidden sm:hidden md:block lg:block lg:-ml-48 lg:-mb-8" src={image3} alt="" />
        </div>

        <form
          action=""
          className="bg-white xs:mx-auto sm:mx-auto md:mx-0 flex flex-col gap-5 md:static lg:absolute right-5 top-3 mr-10 p-7 rounded-lg md:w-[300px] lg:w-[460px] shadow-lg"
        >
          <input
            className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
            type="text"
            placeholder=" Name*"
          />

          <input
            className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
            type="text"
            placeholder=" Last Name*"
          />

          <input
            className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
            type="text"
            placeholder="Company Name*"
          />

          <input
            className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
            type="email"
            placeholder="Business E-mail*"
          />

          <input
            className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
            type="number"
            placeholder=" Business Phone*"
          />
          <select
            name="country"
            id="country"
            className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
          >
            <option
              className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
              value="country"
              defaultValue={"Select Country"}
              disabled
            >
              Select Country
            </option>

            <option
              className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
              value="country"
            >
              Pakistan
            </option>
            <option
              className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
              value="country"
            >
              USA
            </option>
            <option
              className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
              value="country"
            >
              India
            </option>
            <option
              className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
              value="country"
            >
              Other
            </option>
          </select>
          <button className="w-fit ml-auto bg-blue text-white rounded-3xl px-8 py-2 ">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ScheduleDemo;
