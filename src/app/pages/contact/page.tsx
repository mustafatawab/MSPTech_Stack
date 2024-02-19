
import Heading from "@/components/Heading/heading";
import Navbar from "@/components/Navbar/Navbar";
import Wrapper from "@/components/Wrapper/wrapper";
import React from "react";
import instagram from "@/assets/svgs/icons/instagram.svg";
import Image from "next/image";
import {
  FaInstagram,
  FaDiscord,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

import { GrTwitter } from "react-icons/gr";
import Contact from "@/views/Contact/contact";
const page = () => {
  

  return (
    <>
      <Navbar />
      <div className="uppercase w-2/3 mx-auto mt-40 space-y-10 overflow-hidden">
        <p className="font-[900]  sm:text-[24px] md:text-[32px] lg:text-[64px] text-white">
          extend your reach.
          <br />
          Grow your business.
        </p>
      </div>

      <Wrapper>
        <section className="lg:mt-96">
          <Contact />
        </section>

        {/* All Socials */}
        <section className="mt-52 text-center space-y-5">
          <Heading text="All Socials" />
          <div className="flex text-5xl text-blue justify-center items-center gap-20">
            <FaInstagram />
            <FaFacebook />
            <GrTwitter />
            <FaDiscord />
            <FaLinkedin />
            <FaTiktok />
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default page;
