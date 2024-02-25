"use client";
import Heading from "@/components/Heading/heading";
import React, { useEffect, useState } from "react";

const Contact = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    // const name = e.targe.name;
    // const value = e.targe.value;

    const { name, value } = e.target;
    setContactDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(contactDetails);

    setContactDetails({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="mt-10 gap-5">
      <Heading text="Contact Us" />
      <p>
        Thank you for your interest in MSPTech Stack Platform. Complete the form
        below and some will reach out shortly to you..
      </p>

      <div className=" w-full 2xs:bg-transparent sm:bg-transparent md:bg-blue rounded-2xl md:p-20 lg:p-28 relative mt-10">
        {/* <Image className="absolute" src={backgroud} alt=""/> */}
        <p className="text-white  lg:w-96 ml-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          voluptatum ipsa aliquid est laborum dolor unde? Labore ex sequi magni
          saepe quidem et quam? Soluta beatae odit necessitatibus voluptate
          dolores.
        </p>

        <form
          onSubmit={handleSubmit}
          action=""
          className="bg-white flex flex-col gap-5 absolute top-0 -mt-7 p-7 rounded-lg 2xs:w-full sm:w-80 md:w-[300px] lg:w-[460px] shadow-lg"
        >
          <input
            className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
            type="text"
            placeholder="Name*"
            name="name"
            onChange={handleChange}
            required
          />

          <input
            className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
            type="email"
            placeholder="Business E-mail*"
            name="email"
            onChange={handleChange}
            required
          />

          <textarea
            name=""
            id=""
            cols={20}
            rows={6}
            dirName="message"
            className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
            onChange={handleChange}
            required
          />
          <button className="w-fit ml-auto bg-blue text-white rounded-3xl px-8 py-2 ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
