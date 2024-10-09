import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 pt-[4%] text-[14px] text-[#3F403F]">
      <div className="flex flex-col lg:flex-row justify-between w-full gap-10">
        <div>
          {" "}
          <div>
            <Image
              src={"/images/getajob_logo.png"}
              width={65}
              height={65}
              alt="getajob_logo"
            />
          </div>
          <p>
            Getajobng provides a full online service <br /> for anyone looking
            for a new job. We're <br /> not a recruitment agency, we're a job
            site.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-[500] text-[18px] mb-2">Information</h2>
          <div className="flex flex-col gap-5">
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Terms & Condition</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-[500] text-[18px] mb-2">Job Seekers</h2>
          <div className="flex flex-col gap-5">
            <p>Create Account</p>
            <p>Job List </p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-[500] text-[18px] mb-2"> Employers</h2>
          <div className="flex flex-col gap-5">
            <p>Create Account</p>
            <p>Post a Job </p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-[500] text-[18px] mb-2"> Social Media:</h2>
          <div></div>
        </div>
      </div>
      <p className="text-center">
        © Copyright Get-A-Job RMS 2019, All right reserved
      </p>
    </footer>
  );
};

export { Footer };
