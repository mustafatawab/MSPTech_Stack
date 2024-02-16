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
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div className="overflow-hidden">
      {/* Background Image */}
      <Image
        className="absolute -z-10 w-[1320px]  object-cover"
        src={background}
        alt="backgorund"
      />

      {/* Navbar starts here */}

      <nav className="relative  flex items-center justify-between px-12 text-white font-semibold z-20">
        <Link href={"/"}>
          {" "}
          <Image src={logo} alt="logo" />{" "}
        </Link>
        <ul className="flex justify-between items-center gap-5 ">
          <li
            className="group relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <span className="relative flex gap-2">
              Marketplace <Image src={arrow} alt="" />
            </span>

            {isOpen && (
              <ul className="space-y-3 duration-500 font-light text-gray-700 w-52 p-2 -ml-2 mt-1  rounded-lg group-hover:block absolute top-full  bg-white border ">
                <li>
                  <Link href={"/pages/exploreMarketplace"}>
                    Explore The Marketplace
                  </Link>
                </li>
                <li>
                  <Link href={"/pages/venderMarketplace"}>
                    Marketplace for Venders
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href={"#"}>Growth With Us</Link>
          </li>
          <li>
            <Link href={"#"}>About</Link>
          </li>
          <li>
            <Link href={"#"}>Support</Link>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <Link href={"#"}>Login</Link>
          <Button text="Get Started" />
          <Image src={dunya} alt="" />
          <Image onClick={() => setIsSearch(true)} src={search} alt="" />
        </div>
      </nav>

      {isSearch && (
        <div className="flex justify-center items-center duration-300">
          <form
            action=""
            className="bg-blue text-white w-2/3 mx-auto absolute top-3  rounded-3xl py-1 px-3 flex justify-center items-center"
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
