"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/svgs/logo.svg";
import background from "../../assets/svgs/headerBackground.svg";
import Link from "next/link";
import arrow from "../../assets/svgs/dropdown.svg";
import Button from "../button/PrimaryButton";
import dunya from "../../assets/svgs/dunya.svg";
import search from "../../assets/svgs/search.svg";
import { IoMdClose } from "react-icons/io";
import PrimaryButton from "../button/PrimaryButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [growth, setGrowth] = useState(false);

  return (
    <div className="h-fit">
      {/* Background Image */}
      <Image
        className="absolute -z-10  w-5/6"
        src={background}
        alt="backgorund"
      />

      {/* Navbar starts here */}

      <nav className="relative  flex items-center justify-between text-lg px-20 text-white font-semibold z-20 ">
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
        <ul className="flex justify-between items-center gap-5 ">
          <li className="group relative cursor-pointer">
            <span
              className="static flex gap-2"
              onMouseEnter={() => setIsOpen(true)}
            >
              Marketplace <Image src={arrow} alt="" />
            </span>

            {isOpen && (
              <ul
                onMouseLeave={() => setIsOpen(false)}
                className=" z-20 h-fit space-y-3  font-light text-gray-700 w-64 p-2 -ml-2 mt-1  rounded-lg  absolute   bg-white  "
              >
                <li className="font-semibold ">
                  <Link href={"/pages/exploreMarketplace"}>
                    Explore The Marketplace
                  </Link>
                </li>
                <li className="font-semibold">
                  <Link href={"/pages/venderMarketplace"}>
                    Marketplace for Venders
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="group relative cursor-pointer">
            <span
              className="static flex gap-2"
              onMouseEnter={() => setGrowth(true)}
            >
              Growth With Us <Image src={arrow} alt="" />
            </span>

            {growth && (
              <div
                onMouseLeave={() => setGrowth(false)}
                className=" z-20 h-fit space-y-3  font-light text-gray-700 w-40  p-2 -ml-2 mt-1  rounded-lg  absolute   bg-white  "
              >
                <li className="font-semibold ">
                  <Link href={"/pages/contact"}>Contact Us</Link>
                </li>
              </div>
            )}
          </li>
          <li>
            <Link href={"/pages/about"}>About</Link>
          </li>
          <li>
            <Link href={"/pages/support"}>Support</Link>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <Link href={"/pages/signin"}>Login</Link>
          <Link href={"/pages/signup"}>
            <PrimaryButton text="Get Started" />
          </Link>
          <Image src={dunya} alt="" />
          <Image onClick={() => setIsSearch(true)} src={search} alt="" />
        </div>
      </nav>

      {isSearch && (
        <div className="flex justify-center items-center ">
          <form
            action=""
            className="bg-blue text-white w-2/3 mx-auto absolute top-3  rounded-3xl py-1 px-3 flex justify-center items-center z-20"
          >
            <input
              className="p-2 w-full  bg-transparent outline-none"
              type="text"
              placeholder="Search Products"
            />
            <IoMdClose
              className="text-3xl text-white"
              onClick={() => setIsSearch(false)}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Navbar;
