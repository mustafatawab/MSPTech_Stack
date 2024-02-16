import React from "react";
import Image from "next/image";
import Heading from "@/components/Heading/heading";
import Wrapper from "@/components/Wrapper/wrapper";
import icon1 from "@/assets/svgs/venderMarketplace/icon1.svg";
import icon2 from "@/assets/svgs/venderMarketplace/icon2.svg";
import icon3 from "@/assets/svgs/venderMarketplace/icon3.svg";
import PrimaryButton from "@/components/button/PrimaryButton";
import growUpImage from "@/assets/svgs/home/growUp.svg";
const page = () => {
  return (
    <>
      {/* Hero Section */}

      <div className="uppercase w-2/3 mx-auto mt-40 space-y-10 overflow-hidden">
        <p className="font-[900]  sm:text-[24px] md:text-[32px] lg:text-[64px] text-white">
          extend your reach.
          <br />
          Grow your business.
        </p>
      </div>

      <Wrapper>
        {/* Simple Text */}
        <div className="mt-[450px]">
          <p className="text-blue text-center text-[24px] font-semibold">
            Explore the possibilities with the global MSPTech Stack Marketplace{" "}
            <br />
            featuring 30,000+ resellers, 400,000+ SMBs, and 10+ million end
            users.
          </p>
        </div>

        {/* Section 2 - Why Vendors Choose MSPTech Stack Marketplace */}
        <section className="py-20 ">
          <div className="sm:w-full  lg:w-[800px] mb-10">
            <Heading text="Why Venders Choose MSPTech Stack Marketplace" />
          </div>

          <div className="flex flex-wrap justify-between gap-10 items-center text-center">
            <span className="w-[360px] text-center bg-blue py-10 px-14 flex flex-col justify-center items-center gap-5 text-white rounded-xl shadow-xl">
              <Image src={icon1} alt="" />
              <h3 className="text-2xl font-semibold">Reach new SMB markets</h3>
              <p>
                Pax8 Marketplace serves over 400,000 small and medium-sized
                businesses (SMBs).
              </p>
            </span>

            <span className="w-[360px] text-center bg-[#EFEFF1] py-10 px-14 flex flex-col justify-center items-center gap-5 text-black rounded-xl shadow-xl">
              <Image src={icon2} alt="" />
              <h3 className="text-2xl font-semibold">Strengthen your brand</h3>
              <p>
                Increase brand visibility through our go-to-market (GTM)
                offerings.
              </p>
            </span>

            <span className="w-[360px] text-center bg-blue py-10 px-14 flex flex-col justify-center items-center gap-5 text-white rounded-xl shadow-xl">
              <Image src={icon3} alt="" />
              <h3 className="text-2xl font-semibold">Grow your business</h3>
              <p>
                Get lower customer acquisition cost (CAC) and higher lifetime
                value (LTV).
              </p>
            </span>
          </div>
          <div className="text-center my-16">
            <PrimaryButton text="Join the MSPTech Stack Marketplace" />
          </div>
        </section>

        {/*Section 3 - The easiest way to accelerate your go-to-market reach */}
        <section className="flex items-end">
          <div className="basis-2/3 space-y-10">
            <Heading text="The easiest way to accelerate your go-to-market reach" />
            <p className="text-[#3A3A3A] text-[22px]">
              MSPTech Stack Accelerate is an exclusive program that provides a
              clear <br />
              roadmap to help you effectively manage your GTM activities. Its
              never been easier to foster stronger engagement and empower your
              business <br />
              Get transparency regarding additional opportunities beyond core{" "}
              <br />
              management. Drive benefits incrementally with a tiered and <br />
              incentivized program. Establish a competitive edge in the <br />
              marketplace.
            </p>
            <PrimaryButton text="Join the MSPTech Stack Marketplace" />
          </div>
          <div>
            <Image src={growUpImage} alt="" />
          </div>
        </section>

        {/* Section 4 - The MSPTech Stack is Best-in-class for a reason */}
        <section className="my-28">
          <div className="bg-[#0455B7] p-10 text-center space-y-10 rounded-xl">
            <h1 className="text-[36px] font-semibold text-white">
              The MSPTech Stack is Best-in-class for a reason
            </h1>

            <div className="flex flex-wrap justify-around gap-4">
              <span className="w-[253px] flex flex-col p-10 justify-center items-center rounded-3xl shadow-xl">
                <h2 className="text-white font-bold text-[44px]">0%</h2>
                <p className="text-white">98.5% fully automated</p>
              </span>
              <span className=" w-[253px] flex flex-col p-10 justify-center items-center rounded-3xl shadow-xl">
                <h2 className="text-white font-bold text-[44px]">100K+</h2>
                <p className="text-white">Over 300,000 transactions per</p>
              </span>
              <span className=" w-[253px] flex flex-col p-10 justify-center items-center rounded-3xl shadow-xl">
                <h2 className="text-white font-bold text-[44px]">400</h2>
                <p className="text-white">
                  Currency conversion for 17 currencies
                </p>
              </span>
              <span className="w-[253px] flex flex-col p-10 justify-center items-center rounded-3xl shadow-xl">
                <h2 className="text-white font-bold text-[44px]">1400%</h2>
                <p className="text-white">
                  85% of support requests resolved in-house
                </p>
              </span>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default page;
