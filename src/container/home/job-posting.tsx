"use client"
import Image from "next/image";
import React, { useState } from "react";
import { NextIcon, PrevIcon } from "@/assets"; 

const jobData = [
  {
    id: 1,
    job_type: "Full time",
    job_role: "QA Engineer",
    src: "/images/paystack1.png",
    company: "PayStack",
    location: "Lagos, Nigeria",
  },
  {
    id: 2,
    job_type: "Full time",
    job_role: "Product Analyst",
    src: "/images/google1.png",
    company: "Google",
    location: "Lagos, Nigeria",
  },
  {
    id: 3,
    job_type: "Full time",
    job_role: "HR",
    src: "/images/flutterwave.png",
    company: "Flutterwave",
    location: "Lagos, Nigeria",
  },
  {
    id: 4,
    job_type: "Full time",
    job_role: "QA Engineer",
    src: "/images/access.png",
    company: "Access Bank",
    location: "Lagos, Nigeria",
  },
  {
    id: 5,
    job_type: "Full time",
    job_role: "QA Engineer",
    src: "/images/paystack1.png",
    company: "PayStack",
    location: "Lagos, Nigeria",
  },
  {
    id: 6,
    job_type: "Full time",
    job_role: "QA Engineer",
    src: "/images/paystack1.png",
    company: "PayStack",
    location: "Lagos, Nigeria",
  },
];

const JobPosting = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; 

  const handleNext = () => {
    if (currentIndex < jobData.length - itemsPerPage) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const visibleJobs = jobData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="flex flex-col-reverse gap-5 py-[6%] my-[10%] lg:my-0 text-[#3F403F] overflow-hidden w-full p-[6%]">
      <div className="flex gap-2 ml-auto mb-4">
        <span onClick={handlePrev} className="cursor-pointer">
          <PrevIcon />
        </span>
        <span onClick={handleNext} className="cursor-pointer">
          <NextIcon />
        </span>
      </div>
      <div className="flex gap-5">
        {visibleJobs.map((data) => (
          <div
            className="gap-10 w-full border-2 bg-white rounded-[5px]"
            key={data.id}
          >
            <p className="ml-auto my-5 mr-2 bg-[#F4F5F9] rounded-full w-fit text-[12px] text-[#9B9B9B] px-5 py-1">
              {data.job_type}
            </p>
            <div className="p-5 flex flex-col h-fit gap-5 text-center w-[300px] sm:min-w-[200px] md:min-w-[250px] lg:min-w-[300px]">
              <div>
                <Image
                  src={data.src}
                  width={100}
                  height={100}
                  alt="posting-image"
                  className="w-auto m-auto"
                />
              </div>
              <h2 className="text-[18px] font-bold">{data.job_role}</h2>
            </div>
            <hr />
            <div className="p-2 flex flex-col gap-3">
              <p>{data.company}</p>
              <div className="flex justify-between items-center">
                <p className="text-[18px] font-[500]">{data.location}</p>
                <p className="bg-[#06942A] px-5 py-1 text-white w-fit rounded-full">
                  Apply
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { JobPosting };
