"use client";
import FormSection from "./form/Form";
import Navbar from "./navbar/Navbar";
import Settings from "./settings/Settings";

export default function Home() {
  return (
    <div className="w-full">
      {/* <Navbar /> */}
      <div className="w-[85%] my-[40px] mx-[auto] max-[500px]:w-[95%] ">
        <Settings />
        <FormSection />
      </div>
    </div>
  );
}
