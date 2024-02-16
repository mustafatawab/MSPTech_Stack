import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
import React from "react";
import mouse from '../../assets/svgs/mouse.svg'
import Image from "next/image";
import background from "../../assets/svgs/headerBackground.svg"

const HeroSection = () => {
  return (
    <>
    <div className="w-2/3 mx-auto mt-20 space-y-10 overflow-hidden">
      <p className="font-[900] sm:text-[24px] lg:text-[64px] text-white">
        One cloud marketplace.
      <br />
        infinite growth
      </p>

      <p className="lg:font-[600] lg:text-[24px] text-white">
        Buy, Sell and manage cloud solutions with the
       <br /> 
        Marketplace that Fuels your Business
      </p>

      <span className="flex   gap-8">
        <SecondaryButton text="Request a Demo" />
        <PrimaryButton text="Explore the Marketplace" />
      </span>
    </div>
      <div className=" flex items-center justify-center md:mt-10 lg:mt-32 static  ">
        <Image className="" src={mouse} alt=''/>
      </div>
    </>
  );
};

export default HeroSection;
