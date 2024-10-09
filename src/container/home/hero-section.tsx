import Image from "next/image";
import React from "react";
import { SearchIcon } from "../../assets";
const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center py-[3%]">
      <div className="text-[#3F403F] flex flex-col gap-5">
      <div>
          <h1 className="text-[32px] lg:text-[48px] font-[700] leading-[38px] lg:leading-[54.96px]">
            Find a <span className="text-[#68bd7e]">job</span> easily
          </h1>
          <p className="text-sm lg:text-base mt-3 lg:mt-0">
            With verified, up-to-date job listings directly from employer websites, we <br className="hidden lg:inline" />
            create a premium experience for job seekers, employers, and data <br className="hidden lg:inline" />
            seekers alike.
          </p>
        </div>
        <div className="flex border-2 rounded-full  text-[14px]">
          <input
            type="text"
            placeholder="Enter keywords, skill, interest "
            className="w-full  bg-transparent p-2 outline-none focus-visible:ring-transparent focus-visible:ring-offset-0"
          />
          <input
            type="text"
            placeholder="Location"
            className="border-l-2 border-l-[#E5E5E5] w-2/3 p-2 focus-visible:ring-transparent focus-visible:ring-offset-0 outline-none"
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
            <Image src={"/images/kpmg.png"} width={70} height={33} alt="icon" />
          </div>
        </div>
      </div>
      <div className="mb-10 lg:mb-0">
        {" "}
        <Image
          src={"/images/hero-image.svg"}
          width={500}
          height={500}
          alt="hero-image"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export { HeroSection };
