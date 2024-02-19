import React from "react";
import Image from "next/image";
import Heading from "@/components/Heading/heading";
import Wrapper from "@/components/Wrapper/wrapper";
import icon1 from "@/assets/svgs/venderMarketplace/icon1.svg";
import icon2 from "@/assets/svgs/venderMarketplace/icon2.svg";
import icon3 from "@/assets/svgs/venderMarketplace/icon3.svg";
import PrimaryButton from "@/components/button/PrimaryButton";
import growUpImage from "@/assets/svgs/home/growUp.svg";
import finance from "@/assets/svgs/venderMarketplace/finance.svg";
import productivity from "@/assets/svgs/venderMarketplace/productivity.svg";
import continuity from "@/assets/svgs/venderMarketplace/continuity.svg";
import infrastructure from "@/assets/svgs/venderMarketplace/infrastructure.svg";
import image1 from "@/assets/svgs/home/scheduleDemo/image.svg";
import image2 from "@/assets/svgs/home/scheduleDemo/image2.svg";
import image3 from "@/assets/svgs/home/scheduleDemo/image3.svg";
import Navbar from "@/components/Navbar/Navbar";
const page = () => {
  return (
    <>
      <Navbar />
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

          <div className="flex flex-wrap justify-between gap-10 items-center text-center ">
            <span className=" w-[360px] text-center bg-blue py-10 px-14 flex flex-col justify-center items-center gap-5 text-white rounded-xl shadow-xl">
              <Image src={icon1} alt="" />
              <h3 className="text-2xl font-semibold">Reach new SMB markets</h3>
              <p>
                Pax8 Marketplace serves over 400,000 small and medium-sized
                businesses (SMBs).
              </p>
            </span>

            <span className=" w-[360px] text-center bg-[#EFEFF1] py-10 px-14 flex flex-col justify-center items-center gap-5 text-black rounded-xl shadow-xl">
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

        {/* section 5 - Our marketplace delivers value for every vendor,  in every business */}
        <section>
          <Heading text="Our marketplace delivers value for every vendor,  in every business" />
          <div className="flex flex-wrap justify-between items-center my-6">
            <span className="flex flex-col">
              <Image src={finance} alt="FInance" />
              <p className="text-blue font-bold text-xl px-3"> Finance</p>
            </span>

            <span className="flex flex-col">
              <Image src={productivity} alt="productivity" />
              <p className="text-blue font-bold text-xl px-3"> Productivity</p>
            </span>

            <span className="flex flex-col">
              <Image src={continuity} alt="Continuity" />
              <p className="text-blue font-bold text-xl px-3"> Continuity</p>
            </span>

            <span className="flex flex-col">
              <Image src={infrastructure} alt="Infrastructure" />
              <p className="text-blue font-bold text-xl px-3">
                {" "}
                Infrastructure
              </p>
            </span>
          </div>
          <div>
            <span className="bg-blue rounded-full w-[27px] h-[10px]"></span>
          </div>
        </section>

        {/* section 6 - Interested in Joining the Marketplace? */}

        <section className="md:static lg:relative my-10 py-10">
          <span className="w-1/2 block">
            <Heading text="Interested in Joining the Marketplace?" />
          </span>
          <p className="text-[#4F4F4F] text-[24px]">
            To begin the vendor evaluation process, please fill out this bform.
            We will reach out with further questions and schedule a time to
            meet.
          </p>
          <div className="md:mt-20 lg:mt-40 bg-blue flex flex-wrap md:justify-center lg:justify-start md:items-center lg:items-center p-5 -z-30 rounded-2xl gap-10">
            <span className="flex  items-end gap-4">
              <div className="">
                <Image src={image1} alt="" />
              </div>
              <div className="flex md:static lg:relative ">
                <Image src={image2} className="z-20" alt="" />
                <Image className="lg:-ml-48 lg:-mb-8" src={image3} alt="" />
              </div>
            </span>
            <form
              action=""
              className="bg-white flex flex-col gap-5 md:static lg:absolute right-5   mr-10 p-7 rounded-lg md:w-[300px] lg:w-[460px] shadow-lg"
            >
              <input
                className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
                type="text"
                placeholder=" Company Name*"
              />

              <input
                className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
                type="text"
                placeholder=" Company Website*"
              />

              <input
                className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
                type="text"
                placeholder="Your Name*"
              />

              <input
                className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
                type="text"
                placeholder="Job Title*"
              />
              <input
                className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
                type="email"
                placeholder="Your E-mail Address*"
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
              <div className="text-[#577DB8] font-semibold px-2">
                <p className="">Were your prefered by anyone ?</p>
                <div className="flex gap-10 ">
                  <span className="">
                    <input
                      type="radio"
                      name="prefered"
                      value={"yes"}
                      id="yes"
                    />
                    <label htmlFor="yes">Yes</label>
                  </span>
                  <span>
                    <input type="radio" name="prefered" id="no" value={"no"} />{" "}
                    <label htmlFor="no">No</label>
                  </span>
                </div>
              </div>
              <input
                className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
                type="text"
                placeholder="If yes who refered you ?"
              />
              <button className="w-fit ml-auto bg-blue text-white rounded-3xl px-8 py-2 ">
                Submit
              </button>
            </form>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default page;
