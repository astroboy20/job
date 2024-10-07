import { ForwardIcon } from "@/assets";
import Image from "next/image";
import React from "react";

const Proof = () => {
  return (
    <div className="grid grid-cols-2 items-center gap-10 bg-[#06942A1A] text-[#3F403F]">
      <div className="pl-[15%] flex flex-col gap-5">
        <h1 className="text-[36px] font-[700]">
          {" "}
          Over 1000+ jobs from top companies in our network
        </h1>
        <p>
          Every day we index millions of jobs directly from employer websites.
          We’re committed to accurate, high-quality jobs so you won’t find old,
          duplicated, or spammy listings here.
        </p>
        <p>
          Organize and automate your job search while at home or on the go.
          We’ll deliver new, relevant jobs of interest straight to your inbox.
        </p>
        <p className="text-[#06942A] flex gap-1 items-center">
          Learn More <ForwardIcon />
        </p>
      </div>
      <Image src={"/images/Logos.svg"} width={500} height={500} alt="logos" />
    </div>
  );
};

export { Proof };
