import Image from "next/image";
import LandingPage from "./landingpage/page";
import Homepage from "@/components/Homepage";
import Pages from "@/components/Pages";


export default function Home() {
  return (
    <div className=" flex flex-col   ">
      <Homepage />
      <div className="flex flex-row justify-center items-center w-full">
        <Pages />
      </div>
    </div>
  );
}
