import Heading from "@/components/Heading/heading";
import Navbar from "@/components/Navbar/Navbar";
import Wrapper from "@/components/Wrapper/wrapper";
import React from "react";

const page = () => {
  return (
    <main>
      <Navbar />
      {/* Hero Section */}

      <div className="uppercase w-2/3 mx-auto mt-40 space-y-10 overflow-hidden">
        <p className="font-[900]  sm:text-[24px] md:text-[32px] lg:text-[64px] text-white">
          Amazing Support ,
          <br />
          Available 24/7
        </p>
      </div>
      <Wrapper>
        <section className="mt-[450px] space-y-10">
          <p className="text-blue text-center text-[24px] font-bold">
            Explore the possibilities with the global MSPTech Stack Marketplace{" "}
            <br />
            featuring 30,000+ resellers, 400,000+ SMBs, and 10+ million end
            users.
          </p>

          <p className="text-center font-bold text-[#4F4F4F] text-xl">
            Partner Suport
          </p>

          <div className="flex justify-around  text-[24px]">
            <span>Open a Ticket</span>
            <span>+123 456 789 909</span>
            <span>support@msptechstack.com</span>
            <span>Contact Us</span>
          </div>

          <div className="sm:w-full md:w-full lg:w-3/4">
            <Heading text="With a 76 NPS, we provide world-class support" />
          </div>

          <div className="flex justify-between items-center">
            <div className="bg-blue rounded-xl p-10 w-fit flex flex-col justify-center items-center basis-1/4 text-center gap-5 ">
              <h3 className="font-bold text-[44px] text-white">500+</h3>
              <p className="text-white text-[16px]">
                500+ certifications from Microsoft to CCNA
              </p>
            </div>

            <div className="bg-blue rounded-xl p-10 w-fit flex flex-col justify-center items-center basis-1/4 text-center gap-5 ">
              <h3 className="font-bold text-[44px] text-white">98.5%</h3>
              <p className="text-white text-[16px]">
                98.5% fully automated provisioning
              </p>
            </div>

            <div className="bg-blue rounded-xl p-10 w-fit flex flex-col justify-center items-center basis-1/4 text-center gap-5 ">
              <h3 className="font-bold text-[44px] text-white">85%</h3>
              <p className="text-white text-[16px]">
                85% of requests resolved in-house
              </p>
            </div>
          </div>

          <div className="bg-[#0455B7] rounded-xl text-center space-y-10 p-10 mt-10">
            <h2 className="text-white font-bold text-4xl">
              Need more proactive support for a project?
            </h2>
            <p className="text-white text-lg">
              Let our pro services team do the heavy lifting.
            </p>
            <button className="bg-white text-black rounded-2xl px-4 py-2">
              Start Your Project
            </button>
          </div>
        </section>
      </Wrapper>
    </main>
  );
};

export default page;
