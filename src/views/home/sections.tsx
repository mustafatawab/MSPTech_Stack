import Wrapper from "@/components/Wrapper/wrapper";
import Image from "next/image";
import React from "react";
import cloudImage from "../../assets/svgs/home/clouds.svg";
import edgeImage1 from "../../assets/svgs/home/edge1.svg";
import edgeImage2 from "../../assets/svgs/home/edge2.svg";
import cloudIcon from "../../assets/svgs/home/cloudIcon.svg";
import edgeIcon from "../../assets/svgs/home/edgeIcon.svg";
import Heading from "@/components/Heading/heading";
import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
import marketplaceImage from "../../assets/svgs/home/marketplaceImage.svg";
import arrow from "../../assets/svgs/home/arrow.svg";
import oneCloud from "../../assets/svgs/home/oneCloud.svg";
import manyCloud from "../../assets/svgs/home/manyClouds.svg";
import diagram from "../../assets/svgs/home/diagram.svg";
import smDiagram from "../../assets/svgs/home/smDiagram.svg";
import image1 from "../../assets/svgs/home/scheduleDemo/image.svg";
import image2 from "../../assets/svgs/home/scheduleDemo/image2.svg";
import image3 from "../../assets/svgs/home/scheduleDemo/image3.svg";
import mspCloudImage from "../../assets/svgs/home/AINetOps/cloudImage.svg";
import growUpImage from "../../assets/svgs/home/growUp.svg";
import newsImage1 from "../../assets/svgs/home/news/image1.svg";
import Link from "next/link";
import backgroud from '../../assets/svgs/home/talktoUs/background.svg'
const Main = () => {
  return (
    <Wrapper>
      {/* Section 1 - Cloud To Edge */}
      <section className="flex flex-wrap  lg:justify-between place-items-end sm:gap-4 lg:gap-0">
        <div className="md:basis-full  lg:basis-1/2 px-4 space-y-5 ">
          <Heading text="Trend : Cloud to Edge" />

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
            debitis. Accusantium, <br /> rem fugit illo ut soluta facilis autem
            laborum nostrum nam nesciunt m?
          </p>
          <div className="">
            <span className="flex justify-start gap-4 items-center p">
              <Image src={cloudIcon} alt="" />
              <h2 className="text-lg font-bold">
                Today : Hundred of Clouds Locations
              </h2>
            </span>
            <Image src={cloudImage} alt="" />
          </div>
        </div>

        <div className=" space-y-10 mb-10 basis-1/2">
          <span className="flex justify-start gap-4 items-center">
            <Image src={edgeIcon} alt="" />

            <h2 className="text-lg font-bold">
              Tommarrow : Millions of Cloud Edge Locations
            </h2>
          </span>
          <div className="flex flex-col gap-5 ">
            <Image src={edgeImage1} alt="" />
            <Image className="" src={edgeImage2} alt="" />
          </div>
        </div>
      </section>

      {/* Section 2 - Services */}
      <section className="my-10 space-y-5 ">
        <Heading text="Services" />
        <div className="flex flex-wrap">
          <div className="space-y-5 basis-1/2">
            <h1 className="text-lg font-bold text-[#4F4F4F] ">ACADEMY</h1>
            <p>
              Access an entire support team of MSP experts, coaches, and peers.
            </p>
            <PrimaryButton text="Get Learning" />
          </div>
          <div className="space-y-5 basis-1/2">
            <h1 className="text-lg font-bold text-[#4F4F4F]">PROSERVICE</h1>
            <p>
              Add bandwidth and expertise to your team with professional
              services.
            </p>
            <PrimaryButton text="Get Learning" />
          </div>
        </div>
      </section>

      {/* Section 3 - Marketplace */}
      <section className="flex  flex-wrap justify-between items-center gap-10">
        <div className="space-y-5 md:basis-full lg:basis-1/3 ">
          <Heading text="Marketplace" />
          <p className="pr-20">
            Enhance operational efficiency with a platform that streamlines
            billing consolidation, automates provisioning, and seamlessly
            integrates with top-tier PSA tools in the industry.
          </p>
          <span className="flex  gap-5">
            <PrimaryButton text="Explore the Marketplace" />
            <button className="w-fit bg-transparent text-black border border-blue rounded-3xl px-4 py-2 ">
              Schedule a Demo
            </button>
          </span>
        </div>
        <div className="md:basis-full lg:basis-1/2">
          <Image
            src={marketplaceImage}
            alt="Marketplace Image goes here"
            width={609}
          />
        </div>
      </section>

      {/* section 4 - why edge enablement is needed */}
      <section className="py-20 space-y-6">
        <Heading text="Why Edge Enablement is needed ?" />
        <p className="w-1/4 text-[#4F4F4F]">
          When the Cloud was born, several companies who enabled the cloud grew
          rapidly.
        </p>

        <div className="relative -z-20 bg-white p-10 rounded-2xl  shadow-xl ">
          <div className="absolute -z-10 mx-auto  flex justify-between items-center sm:hidden md:hidden lg:flex">
            <Image src={arrow} alt="" />
            <Image src={arrow} alt="" />
            <Image src={arrow} alt="" />
          </div>

          <div className="static gap-10 text-center items-center  lg:flex grid md:grid-cols-2 sm:grid-cols-1 justify-between z-20 ">
            <div className="basis-1/5 flex flex-col justify-center items-center gap-5">
              <Image src={oneCloud} alt="" />
              <span className="text-[#4F4F4F] text-[24px] font-semibold">
                Cloud
              </span>
            </div>
            <Image className=" mx-auto" src={smDiagram} alt="" />
            <div className="basis-1/5 flex flex-col justify-center items-center gap-5">
              <Image src={manyCloud} alt="" />
              <span className="text-[#4F4F4F] text-[24px] ">Egde Enable</span>
            </div>
            <Image className="mx-auto" src={diagram} alt="" />
            <div className="basis-1/5 flex flex-col justify-center items-center gap-5">
              <p>
                With Edge still in nascent stage, the new frontier is to enable
                the edge <br />
                Edge needs a platform to Locate, Deploy, Manage, Operate ,
                Optimize Data Movement and MORE...
              </p>
              <button className="w-full bg-blue text-white rounded-3xl px-4 py-2">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Schedule a Demo */}
      <section className="md:static lg:relative">
        <Heading text="Schedule a Demo" />
        <div className="bg-blue flex flex-wrap md:justify-center lg:justify-start md:items-center lg:items-end p-5 -z-30 rounded-2xl gap-10">
          <div className="">
            <Image src={image1} alt="" />
          </div>
          <div className="flex md:static lg:relative ">
            <Image src={image2} alt="" />
            <Image className="-ml-20 -z-10" src={image3} alt="" />
          </div>

          <form
            action=""
            className="bg-white flex flex-col gap-5 md:static lg:absolute right-5 top-3 mr-10 p-7 rounded-lg md:w-[300px] lg:w-[460px] shadow-lg"
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

      {/* Section 6 - MSPTech Stack AINetOps */}
      <section className="py-20 mt-20 flex flex-wrap justify-between gap-10">
        <div className="md:basis-full lg:basis-1/2 flex flex-col justify-around ">
          <Heading text="MSPTech Stack AINetOps" />
          <p className="text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <Image
          className="md:mx-auto lg:mx-0 md:basis-1/2 lg:basis-1/3"
          src={mspCloudImage}
          alt="MSP Cloud "
          width={348}
        />
      </section>

      {/*Section 7 - The easiest way to accelerate your go-to-market reach */}
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

      {/* Section 8 */}
      <section className="py-10 mt-10 space-y-20">
        {/* Counter */}
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

        {/* small one */}
        <div className="flex flex-col justify-start items-center text-center bg-white p-10 gap-5 rounded-2xl shadow-xl">
          <p className="text-[32px] text-[#2D2D2D]">
            Join the 30,000+ partners and vendors building their businesses in
            the MSPTech STack Marketplace
          </p>
          <PrimaryButton text="Get Started" />
        </div>
      </section>

      {/* Section 9 - News */}
      <section className="py-20">
        <Heading text="News" />
        <div className="flex justify-between">
          <div className=" shadow-xl w-[380px]  bg-[#FFFFFF] rounded-b-3xl">
            <Image src={newsImage1} alt="" />
            <span className="p-5    flex flex-col justify-center gap-3 ">
              <h2 className="font-semibold">Lorem Ipsum Dollar</h2>
              <p className="text-[#4D4D4D]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, sequi quasi. Officiis assumenda excepturi vel ut quas
                tenetur nostrum unde doloremque in, minima beatae eaque sequi
                mollitia amet officia iste.
              </p>

              <Link
                className="border text-blue w-fit mx-auto border-blue py-1 px-4 rounded-2xl"
                href="#"
              >
                to read
              </Link>
            </span>
          </div>

          <div className=" shadow-xl w-[380px]  bg-[#FFFFFF] rounded-b-3xl">
            <Image src={newsImage1} alt="" />
            <span className="p-5    flex flex-col justify-center gap-3 ">
              <h2 className="font-semibold">Lorem Ipsum Dollar</h2>
              <p className="text-[#4D4D4D]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, sequi quasi. Officiis assumenda excepturi vel ut quas
                tenetur nostrum unde doloremque in, minima beatae eaque sequi
                mollitia amet officia iste.
              </p>

              <Link
                className="border text-blue w-fit mx-auto border-blue py-1 px-4 rounded-2xl"
                href="#"
              >
                to read
              </Link>
            </span>
          </div>
          <div className=" shadow-xl w-[380px]  bg-[#FFFFFF] rounded-b-3xl">
            <Image src={newsImage1} alt="" />
            <span className="p-5    flex flex-col justify-center gap-3 ">
              <h2 className="font-semibold">Lorem Ipsum Dollar</h2>
              <p className="text-[#4D4D4D]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, sequi quasi. Officiis assumenda excepturi vel ut quas
                tenetur nostrum unde doloremque in, minima beatae eaque sequi
                mollitia amet officia iste.
              </p>

              <Link
                className="border text-blue w-fit mx-auto border-blue py-1 px-4 rounded-2xl"
                href="#"
              >
                to read
              </Link>
            </span>
          </div>
        </div>
      </section>

      {/* Section 10 - Talk To Us */}
      <section className="">
        <Heading text="Talk to Us !" />
        <p className="w-[555px] mb-20">
          Thank you for your interest in MSPTech Stack. Complete the form below
          and some will reach out shortly to you..
        </p>
        <div className=" w-full bg-blue rounded-2xl p-28 relative mt-10">
        {/* <Image className="absolute" src={backgroud} alt=""/> */}
          <p className="text-white w-[555px] ml-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            voluptatum ipsa aliquid est laborum dolor unde? Labore ex sequi
            magni saepe quidem et quam? Soluta beatae odit necessitatibus
            voluptate dolores.
          </p>

          <form
            action=""
            className="bg-white flex flex-col gap-5 absolute top-0 -mt-7 p-7 rounded-lg md:w-[300px] lg:w-[460px] shadow-lg"
          >
            <input
              className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
              type="text"
              placeholder="Name*"
            />

            <input
              className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
              type="email"
              placeholder="Business E-mail*"
            />

            <textarea
              name=""
              id=""
              cols={20}
              rows={6}
              className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
            />
            <button className="w-fit ml-auto bg-blue text-white rounded-3xl px-8 py-2 ">
              Submit
            </button>
          </form>
        
        </div>
      </section>
    </Wrapper>
  );
};

export default Main;
