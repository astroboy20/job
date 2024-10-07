import { HowIcon } from "@/assets";
import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <div className="grid grid-cols-2 gap-10 py-[6%] text-[#3F403F]">
      <div>
        <Image
          src={"/images/how.svg"}
          width={500}
          height={500}
          alt="how-image"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-[36px] font-[700]">How it works</h1>
        <p>
          Getajob helps you find the right job easily. Getajob helps you find
          the right job easily. Getajob helps you find the right job easily.
        </p>
        <h2 className="text-[24px] font-[500] flex items-center gap-2">
          <HowIcon />
          Search Jobs
        </h2>
        <p>
          We have jobs in the most popular industries and with top companies.
          Plus, you can create alerts so you never miss a job opportunity.
        </p>

        <h2 className="text-[24px] font-[500] flex items-center gap-2">
          <HowIcon />
          Create a Profile and Get Noticed
        </h2>
        <p>
          Create a profile to showcase your skills and experience so recruiters
          can find you. Upload your CV so you can apply for jobs quickly and
          easily.
        </p>
        <h2 className="text-[24px] font-[500] flex items-center gap-2">
          <HowIcon />
          Apply for jobs
        </h2>
        <p>
          Find the training you need to improve your skills, or visit our Career
          Center for tips and advice to build your career.
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
