import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
import React from "react";
import mouse from "../../assets/svgs/mouse.svg";
import Image from "next/image";
import background from "../../assets/svgs/headerBackground.svg";
import Link from "next/link";
import Header from "@/components/Navbar/Header";

const HeroSection = () => {
  return (
    <>
      <div className="w-full">
        <Image className="absolute -z-10 bg-fixed  object-contain w-full top-0 left-0" src={background} alt="" />
      </div>
      <div className=" z-20 2xs:-mt-60 sm:-mt-24  md:-mt-48 lg:mt-0 2xs:pr-10 sm:pr-8 md:pr-0 lg:pr-0 2xs:text-center      xs:space-x-1 md:space-y-5 lg:space-y-10 ">
        <p className="font-bold 2xs:text-xl xs:text-3xl sm:text-5xl md:text-6xl text-white text-start">
          One cloud marketplace.
          <br />
          infinite growth
        </p>

        <p className="2xs:hidden sm:block md:block  lg:font-[600] lg:text-[24px] text-white text-start">
          Buy, Sell and manage cloud solutions with the
          <br />
          Marketplace that Fuels your Business
        </p>

        <span className="flex flex-wrap 2xs:flex-col md:flex-row xs:gap-1 sm:gap-1 md:gap-7 lg:gap-8 items-start">
          <div className="flex items-start">

          <SecondaryButton text="Request a Demo" />
          </div>
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