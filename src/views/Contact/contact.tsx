'use client'
import Heading from "@/components/Heading/heading";
import React , {useState} from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    alert("Form submitted");
  };
  return (
    <>
      <Heading text="Contact Us" />
      <p>
        Thank you for your interest in MSPTech Stack Platform. Complete the form
        below and some will reach out shortly to you..
      </p>

      <div className=" w-full bg-blue rounded-2xl p-28 relative mt-10">
        {/* <Image className="absolute" src={backgroud} alt=""/> */}
        <p className="text-white w-[555px] ml-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          voluptatum ipsa aliquid est laborum dolor unde? Labore ex sequi magni
          saepe quidem et quam? Soluta beatae odit necessitatibus voluptate
          dolores.
        </p>

        <form
          onSubmit={() => alert("FOrm submittedwa")}
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
    </>
  );
};

export default Contact;
