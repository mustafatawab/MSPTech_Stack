import Navbar from "@/components/Navbar/Navbar";
import Dropdown from "@/components/Navbar/dropDown";
import HeroSection from "@/views/home/hersection";
import Main from "@/views/home/AllSections";
import Image from "next/image";
export default function Home() {
  return (
    <div className="w-screen">
      {/* <Dropdown /> */}
      <Navbar />
      <Main />
    </div>
  );
}
