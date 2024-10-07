import Image from "next/image";
import React from "react";
import { SearchIcon } from "../../assets";
const HeroSection = () => {
  return (
    <div className="flex justify-between items-center py-[3%]">
      <div className="text-[#3F403F] flex flex-col gap-5">
        <div>
          <h1 className="text-[48px] font-[700]  leading-[54.96px]">
            {" "}
            Find a <span className="text-[#68bd7e]">job</span> easily
          </h1>
          <p>
            {" "}
            With verified, up-to-date job listings directly from employer
            websites, we <br /> create a premium experience for job seekers,
            employers, and data <br /> seekers alike.
          </p>
        </div>

        <div className="flex border-2 rounded-full  text-[14px]">
          <input
            type="text"
            placeholder="Enter keywords, skill, interest "
            className="w-full  bg-transparent p-2"
          />
          <input
            type="text"
            placeholder="Location"
            className="border-l-2 border-l-[#E5E5E5] w-2/3 p-2"
          />
          <button className="bg-green-700 rounded-full px-5">
            <SearchIcon />
          </button>
        </div>

        <div>
          <p className="font-[500]">Trusted by:</p>
          <div className="flex gap-5 items-center">
            <Image
              src={"/images/paystack.png"}
              width={100}
              height={100}
              alt="icon"
            />
            <Image
              src={"/images/google.png"}
              width={100}
              height={43}
              alt="icon"
            />
            <Image
              src={"/images/kpmg.png"}
              width={70}
              height={33}
              alt="icon"
            />
          </div>
        </div>
      </div>
      <div>
        {" "}
        <Image
          src={"/images/hero-image.svg"}
          width={500}
          height={500}
          alt="hero-image"
        />
      </div>
    </div>
  );
};

export { HeroSection };
