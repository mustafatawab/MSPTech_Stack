import Navbar from "@/components/Navbar/Navbar";
import Dropdown from "@/components/Navbar/dropDown";
import HeroSection from "@/views/home/hersection";
import Main from "@/views/home/AllSections";
import Image from "next/image";
import Header from "@/components/Navbar/Header";
import NewNavbar from "@/components/Navbar/newNavbar";
export default function Home() {
  return (
    <div className="w-screen">
      {/* <Dropdown /> */}
      {/* <Navbar /> */}
      <Header />
      {/* <NewNavbar /> */}
      <Main />
    </div>
  );
}
