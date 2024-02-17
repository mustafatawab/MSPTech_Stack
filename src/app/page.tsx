import Navbar from "@/components/Navbar/Navbar";
import Dropdown from "@/components/Navbar/dropDown";
import HeroSection from "@/views/home/hersection";
import Main from "@/views/home/sections";
import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* <Dropdown /> */}
      <Navbar />
      <HeroSection></HeroSection>
      <Main />
    </>
  );
}
