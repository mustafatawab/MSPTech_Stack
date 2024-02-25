import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Image from "next/image";
import mouse from "@/assets/svgs/mouse.svg";
import Wrapper from "@/components/Wrapper/wrapper";
import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";
import { MdStarBorder } from "react-icons/md";

import background from "@/assets/svgs/headerBackground.svg";
// App Categories
import cloudManagement from "@/assets/svgs/ExploreMarketplace/cloudmanagement.svg";
import networking from "@/assets/svgs/ExploreMarketplace/networking.svg";
import security from "@/assets/svgs/ExploreMarketplace/secuirity.svg";
import storage from "@/assets/svgs/ExploreMarketplace/storage.svg";
import os from "@/assets/svgs/ExploreMarketplace/os.svg";
// Featured Apps
import invidia from "@/assets/svgs/ExploreMarketplace/invidia.svg";
import fortinet from "@/assets/svgs/ExploreMarketplace/fortinet.svg";
import vmSeries from "@/assets/svgs/ExploreMarketplace/VMSeries.svg";
// Recent Apps
import oracle from "@/assets/svgs/ExploreMarketplace/oracle.svg";
import resdiary from "@/assets/svgs/ExploreMarketplace/resdiary.svg";
import ethor from "@/assets/svgs/ExploreMarketplace/ethor.svg";
import mondomenu from "@/assets/svgs/ExploreMarketplace/mondomenu.svg";
import oracleSqa from "@/assets/svgs/ExploreMarketplace/oraclesqa.svg";
// Top rated Apps
import opkey from "@/assets/svgs/ExploreMarketplace/opkey.svg";
import fxloader from "@/assets/svgs/ExploreMarketplace/fxloader.svg";
import sso from "@/assets/svgs/ExploreMarketplace/sso.svg";
import motiveAI from "@/assets/svgs/ExploreMarketplace/motive.ai.svg";
import Header from "@/components/Navbar/Header";

const page = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      {/* Hero */}
      <section>
      <div className="w-full">
        <Image className="absolute -z-10 bg-fixed  object-contain w-full top-0 left-0" src={background} alt="" />
      </div>
      <div className="2xs:mt-2 sm:mt-2 md:mt-10 2xs:pr-10 sm:pr-8 md:pr-0 lg:pr-0 2xs:text-center sm:text-center md:text-start xs:w-full md:w-fit lg:w-2/3 mx-auto  lg:mt-20 xs:space-x-1 md:space-y-5 lg:space-y-10">
        <p className="2xs:font-semibold sm:font-semibold md:font-bold lg:font-[900] sm:text-[24px] lg:text-[64px] text-white">
          A Universe of
          <br />
          Possiblity
        </p>

        <p className="2xs:hidden sm:hidden md:block  lg:font-[600] lg:text-[24px] text-white">
          Quote, Order, Bill and Provision cloud products in one
          <br />
          place- all with one monthly bill.
        </p>
      </div>
      <div className="2xs:hidden sm:hidden md:flex lg:flex items-center justify-center md:mt-10 lg:mt-32 static   ">
        <Image className="" src={mouse} alt="" />
      </div>
      </section>

      <Wrapper>
        {/* Search  */}
        <div className="flex items-center text-[#16151380] 2xs:mt-40 sm:mt-40 md:mt-40 lg:mt-20">
          <span className="flex items-center bg-white py-1 px-2 border border-[#16151380] rounded-md 2xs:w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
            <IoSearchSharp />
            <input
              type="text"
              className="outline-none border-none px-2 text-black w-full"
            />
          </span>
          <button className="bg-[#C4CED7]/20 text-black font-semibold   p-1 px-2 shadow-lg border-r-2 border-b-2 ">
            Go
          </button>
        </div>

        {/* Oracle Cloud Infrastructure App Categories */}
        <section className="my-10">
          <h2 className="font-semibold text-3xl py-10">
            Oracle Cloud Infrastructure App Categories
          </h2>

          <div className="flex flex-wrap xs:fle-col sm:flex-col md:flex-row 2xs:justify-center  gap-10 md:justify-between">
            <Link href={"/pages/exploreMarketplace/productOverview"}>
              <div className="bg-white shadow-xl rounded-md  py-10 space-y-5 sm:mx-auto md:mx-0 2xs:basis-full  xs:basis-1/2 md:basis-1/3 lg:basis-1/6">
                <Image className="mx-auto" src={cloudManagement} alt="" />
                <hr className="" />
                <br />
                <span className="px-10 flex flex-col ">
                  <p className="font-bold">Cloud Management</p>
                  <p className="text-[#16151399]">70 Applications</p>
                </span>
              </div>
            </Link>

            <Link href={"/pages/exploreMarketplace/productOverview"}>
              <div className="bg-white shadow-xl rounded-md  py-10 space-y-5  sm:mx-auto md:mx-0 2xs:basis-full xs:basis-1/2 md:basis-1/3 lg:basis-1/6">
                <Image className="mx-auto" src={networking} alt="" />
                <hr className="" />
                <br />
                <span className="px-10 flex flex-col ">
                  <p className="font-bold">Networking</p>
                  <p className="text-[#16151399]">102 Applications</p>
                </span>
              </div>
            </Link>

            <Link href={"/pages/exploreMarketplace/productOverview"}>
              <div className="bg-white shadow-xl rounded-md  py-10 space-y-5  sm:mx-auto md:mx-0 2xs:basis-full xs:basis-1/2 md:basis-1/3 lg:basis-1/6">
                <Image className="mx-auto" src={security} alt="" />
                <hr className="" />
                <br />
                <span className="px-10 flex flex-col ">
                  <p className="font-bold">Security</p>
                  <p className="text-[#16151399]">184 Applications</p>
                </span>
              </div>
            </Link>

            <Link href={"/pages/exploreMarketplace/productOverview"}>
              <div className="bg-white shadow-xl rounded-md  py-10 space-y-5  sm:mx-auto md:mx-0 2xs:basis-full xs:basis-1/2 md:basis-1/3 lg:basis-1/6">
                <Image className="mx-auto" src={storage} alt="" />
                <hr className="" />
                <br />
                <span className="px-10 flex flex-col ">
                  <p className="font-bold">Storage</p>
                  <p className="text-[#16151399]">37 Applications</p>
                </span>
              </div>
            </Link>

            <Link href={"/pages/exploreMarketplace/productOverview"}>
              <div className="bg-white shadow-xl rounded-md  py-10 space-y-5  sm:mx-auto md:mx-0 2xs:basis-full xs:basis-1/2 md:basis-1/3 lg:basis-1/6">
                <Image className="mx-auto" src={os} alt="" />
                <hr className="" />
                <br />
                <span className="px-10 flex flex-col ">
                  <p className="font-bold">Operating Systems </p>
                  <p className="text-[#16151399]">74 Applications</p>
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Featured Apps */}
        <section>
          <h2 className="font-semibold text-3xl py-10">Featured Apps</h2>

          <div className="bg-white flex flex-wrap 2xs:flex-col sm:flex-col md:flex-col lg:flex-row justify-between items-center w-fit">
            <div className="basis-1/5 p-10 md:border-r-0 lg:border-r-[1px]">
              <Link href={"/pages/exploreMarketplace/productOverview"}>
                <Image className="mx-auto" src={invidia} alt="...." />
                <p className="py-4">NVIDIA AI Enterprise</p>
                <p className="py-4 text-sm">
                  The End-to-End Software Platform for Production AI{" "}
                </p>
                <span className="flex items-center">
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <p>({0})</p>
                </span>
              </Link>
            </div>

            <div className=" basis-1/5 p-10 md:border-r-0 lg:border-r-[1px]">
              <Link href={"/pages/exploreMarketplace/productOverview"}>
                <Image className="mx-auto" src={invidia} alt="...." />
                <p className="py-4">NVIDIA DGX Cloud </p>
                <p className="py-4 text-sm">
                  Build your models faster on serverless AI
                </p>

                <span className="flex items-center">
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <p>({0})</p>
                </span>
              </Link>
            </div>

            <div className="basis-1/5 p-10 sm:border-r-0 md:border-r-0 lg:border-r-[1px]">
              <Link href={"/pages/exploreMarketplace/productOverview"}>
                <Image className="mx-auto" src={fortinet} alt="...." />
                <p className="py-4">FortiGate Next-Gen Firewall (BYOL) </p>
                <p className="py-4 text-sm">
                  Comprehensive Security in One, Simplified Solution
                </p>

                <span className="flex items-center">
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <p>({0})</p>
                </span>
              </Link>
            </div>

            <div className="basis-1/5 p-10 ">
              <Link href={"/pages/exploreMarketplace/productOverview"}>
                <Image className="mx-auto" src={vmSeries} alt="...." />
                <p className="py-4">
                  Palo Alto Networks VM-Series Next Generation Firewall{" "}
                </p>
                <p className="py-4 text-sm">
                  Protecting applications from threats and stopping data theft
                </p>

                <span className="flex items-center">
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <p>(0)</p>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Apps */}
        <section>
          <span className="mt-20 pb-10 block">
            <h2 className="font-semibold text-3xl ">Recent Apps</h2>
            <p>View 251 More</p>
          </span>

          <div className="bg-white flex flex-wrap 2xs:flex-col sm:flex-col md:flex-col lg:flex-row justify-between items-center w-fit">
            <div className="basis-1/4 p-10 md:border-r-0 lg:border-r-[1px]">
              <Link href={"/pages/exploreMarketplace/productOverview"}>
                <Image className="mx-auto" src={oracle} alt="...." />
                <p className="py-4">Siebel Cloud Manager (SCM)</p>
                <p className="py-4 text-sm">Siebel Cloud Manager (SCM)</p>
                <span className="flex items-center">
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <p>({0})</p>
                </span>
              </Link>
            </div>

            <div className=" basis-1/4 p-10 md:border-r-0 lg:border-r-[1px]">
              <Link href={"/pages/exploreMarketplace/productOverview"}>
                <Image className="mx-auto" src={resdiary} alt="...." />
                <p className="py-4">ResDiary </p>
                <p className="py-4 text-sm">
                  Achieve in-service efficiency with ResDiary Table
                </p>

                <span className="flex items-center">
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <p>({0})</p>
                </span>
              </Link>
            </div>

            <div className="basis-1/4 p-10 sm:border-r-0 md:border-r-0 lg:border-r-[1px]">
              <Link href={"/pages/exploreMarketplace/productOverview"}>
                <Image className="mx-auto" src={ethor} alt="...." />
                <p className="py-4">eThor </p>
                <p className="py-4 text-sm">
                  Order and Pay at Table Solution for Oracle Food &
                </p>

                <span className="flex items-center">
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <p>({0})</p>
                </span>
              </Link>
            </div>
            <div className="basis-1/4 p-10 ">
              <Link href={"/pages/exploreMarketplace/productOverview"}>
                <Image className="mx-auto" src={mondomenu} alt="...." />
                <p className="py-4">MondoMenu</p>
                <p className="py-4 text-sm">
                  Increase your average order value, improve customer
                </p>

                <span className="flex items-center">
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <p>(0)</p>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Top Rated Apss */}
        <section>
          <span className="mt-20 pb-10 block">
            <h2 className="font-semibold text-3xl ">Top Rated Apps</h2>
            <p>View 251 More</p>
          </span>

          <div className="bg-white flex flex-wrap 2xs:flex-col md:flex-col lg:flex-row justify-between items-center w-fit">
            <div className="basis-1/4 p-10 md:border-r-0 lg:border-r-[1px]">
              <Link href={"/pages/exploreMarketplace/productOverview"}>
                <Image className="mx-auto" src={opkey} alt="...." />
                <p className="py-4">Oracle Test Automation from Opkey</p>
                <p className="py-4 text-sm">
                  Opkey provides cost savings, reduces risk, and fills gaps in
                </p>
                <span className="flex items-center">
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <p>({0})</p>
                </span>
              </Link>
            </div>

            <div className=" basis-1/4 p-10 md:border-r-0 lg:border-r-[1px]">
              <Link href={"/pages/exploreMarketplace/productOverview"}>
                <Image className="mx-auto" src={fxloader} alt="...." />
                <p className="py-4">FXLoader </p>
                <p className="py-4 text-sm">
                  Load Currency Exchange Rates into Oracle ERP Cloud
                </p>

                <span className="flex items-center">
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <p>({0})</p>
                </span>
              </Link>
            </div>

            <div className="basis-1/4 p-10 sm:border-r-0 md:border-r-0 lg:border-r-[1px]">
              <Link href={"/pages/exploreMarketplace/productOverview"}>
                <Image className="mx-auto" src={sso} alt="...." />
                <p className="py-4">ESI JDE SSO </p>
                <p className="py-4 text-sm">
                  A better way to do SSO: our revolutionary SSO solution for
                </p>

                <span className="flex items-center">
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <p>({0})</p>
                </span>
              </Link>
            </div>
            <div className="basis-1/4 p-10 ">
              <Link href={"/pages/exploreMarketplace/productOverview"}>
                <Image className="mx-auto" src={motiveAI} alt="...." />
                <p className="py-4"> Motiva AI for Oracle Eloqua</p>
                <p className="py-4 text-sm">
                  Generative Artificial Intelligence to supercharge your email
                </p>

                <span className="flex items-center">
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <p>(0)</p>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Some Text */}
        <div className="my-20 space-y-5">
          <h2 className="text-[#1A1816] text-2xl font-bold">
            Learn Who are Our Partners
          </h2>
          <p>
            Oracle proudly supports a wide range of third-party solutions to
            accelerate and optimize your cloud and hybrid deployments. With new
            offerings continually added, our comprehensive network of partners
            ensures your cloud architecture on Oracle Cloud Infrastructure (OCI)
            can scale and evolve with your organizations needs.
          </p>
          <button className="text-white p-3 bg-[#312D2A] w-fit rounded-md 2xs:mx-auto md:mx-0">
            Our Partners
          </button>
        </div>
      </Wrapper>
    </>
  );
};

export default page;
