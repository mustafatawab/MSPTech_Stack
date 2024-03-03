"use client";
import React, { useState } from "react";

const VenderForm = () => {
  const [formDetails, setFormDetails] = useState({
    CompanyName: "",
    CompanyWebsite: "",
    name: "",
    email: "",
    job: "",
    country: "",
    preferredPerson: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formDetails);

    setFormDetails({
      CompanyName: "",
      CompanyWebsite: "",
      name: "",
      email: "",
      job: "",
      country: "",
      preferredPerson: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="z-20 bg-white flex flex-col gap-5 md:static lg:absolute right-5   mr-10 p-7 rounded-lg 2xs:w-full  md:w-2/3 lg:w-[460px] shadow-lg mx-auto"
    >
      <input
        className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
        type="text"
        placeholder=" Company Name*"
        name="CompanyName"
        onChange={handleChange}
        value={formDetails.CompanyName}
        required
      />

      <input
        className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
        type="text"
        placeholder=" Company Website*"
        name="CompanyWebsite"
        onChange={handleChange}
        value={formDetails.CompanyWebsite}
        required
      />

      <input
        className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
        type="text"
        placeholder="Your Name*"
        name="name"
        onChange={handleChange}
        value={formDetails.name}
        required
      />

      <input
        className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
        type="text"
        placeholder="Job Title*"
        name="job"
        value={formDetails.job}
        onChange={handleChange}
        required
      />
      <input
        className="bg-[#ECEBF6] rounded-xl p-2 text-[#577DB8] outline-none font-semibold"
        type="email"
        placeholder="Your E-mail Address*"
        name="email"
        value={formDetails.email}
        onChange={handleChange}
        required
      />

      <select
        name="country"
        id="country"
        required
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
            <input type="radio" name="prefered" value={"yes"} id="yes" />
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
        name="preferredPerson"
        onChange={handleChange}
        value={formDetails.preferredPerson}
      />
      <button className="w-fit 2xs:mx-auto md:ml-auto bg-blue text-white rounded-3xl px-8 py-2 ">
        Submit
      </button>
    </form>
  );
};

export default VenderForm;
