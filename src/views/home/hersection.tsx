import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
import React from "react";
import mouse from "../../assets/svgs/mouse.svg";
import Image from "next/image";
import background from "../../assets/svgs/headerBackground.svg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="z-20 2xs:-mt-60 sm:-mt-20  md:-mt-36 2xs:pr-10 sm:pr-8 md:pr-0 lg:pr-0 2xs:text-center sm:text-center md:text-start xs:w-full md:w-fit lg:w-2/3 mx-auto  xs:space-x-1 md:space-y-5 lg:space-y-10 overflow-hidden">
        <p className="2xs:font-semibold sm:font-semibold md:font-bold lg:font-[900] sm:text-[24px] lg:text-[64px] text-white">
          One cloud marketplace.
          <br />
          infinite growth
        </p>

        <p className="2xs:hidden sm:hidden md:block  lg:font-[600] lg:text-[24px] text-white">
          Buy, Sell and manage cloud solutions with the
          <br />
          Marketplace that Fuels your Business
        </p>

        <span className="flex 2xs:flex-col md:flex-row xs:gap-1 sm:gap-1 md:gap-7 lg:gap-8">
          <SecondaryButton text="Request a Demo" />
          <Link href={"/pages/exploreMarketplace"}>
            <PrimaryButton text="Explore the Marketplace" />
          </Link>
        </span>
      </div>
      <div className="2xs:hidden sm:hidden md:flex lg:flex items-center justify-center md:mt-10 lg:mt-32 static  ">
        <Image className="" src={mouse} alt="" />
      </div>
    </>
  );
};

export default HeroSection;
