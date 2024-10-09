import { ForwardIcon } from "@/assets";
import Image from "next/image";
import React from "react";

const Proof = () => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-10 bg-[#06942A1A] text-[#3F403F] p-5">
      <div className="flex flex-col gap-5 lg:pl-[5%]">
        <h1 className="text-[24px] lg:text-[36px] font-[700]">
          Over 1000+ jobs from top companies in our network
        </h1>
        <p className="text-[14px] lg:text-base">
          Every day we index millions of jobs directly from employer websites.
          We’re committed to accurate, high-quality jobs so you won’t find old,
          duplicated, or spammy listings here.
        </p>
        <p className="text-[14px] lg:text-base">
          Organize and automate your job search while at home or on the go.
          We’ll deliver new, relevant jobs of interest straight to your inbox.
        </p>
        <p className="text-[#06942A] flex gap-1 items-center">
          Learn More <ForwardIcon />
        </p>
      </div>

     
      <div className="flex justify-center lg:justify-end">
        <Image
          src={"/images/Logos.svg"}
          width={400} 
          height={300} 
          alt="logos"
        />
      </div>
    </div>
  );
};

export { Proof };
