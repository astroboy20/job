"use client";
import { NextIcon, PrevIcon } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  role: string; // Add role property
  src: string;
  content: string;
}

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Irma Black",
    position: "QA Engineer",
    role: "Quality Assurance Expert", // Add role value
    src: "/images/testimonial-image.png",
    content:
      "The platform is really convenient to reach out to companies & I have managed to secure 2 interviews already! I can also track my application status instead of wondering whether the company has seen or shortlisted me",
  },
  {
    id: 2,
    name: "John Doe",
    position: "Software Engineer",
    role: "Full Stack Developer", // Add role value
    src: "/images/testimonial-image.png",
    content:
      "I love using this platform! It has made my job search so much easier and more efficient.",
  },
  {
    id: 3,
    name: "Jane Smith",
    position: "Product Manager",
    role: "Agile Project Leader", // Add role value
    src: "/images/testimonial-image.png",
    content:
      "The support team is incredibly helpful and responsive. Highly recommend!",
  },
  {
    id: 4,
    name: "Alice Johnson",
    position: "Designer",
    role: "UI/UX Designer", // Add role value
    src: "/images/testimonial-image.png",
    content:
      "This platform has been a game changer for my career. I found my dream job here!",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  const { name, position, role, src, content } = testimonialData[currentIndex];

  return (
    <div className="py-[3%] px-[6%] text-[#3F403F] mb-[20%] lg:my-0">
      <h1 className="text-left text-[28px] lg:text-[36px] font-[700] mb-5">
        What are our customers <br /> saying
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex-shrink-0">
          <Image
            src={src}
            width={300}
            height={300}
            alt={`${name} testimonial-image.`}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 ml-auto">
            <span onClick={handlePrev} className="cursor-pointer">
              <PrevIcon />
            </span>
            <span onClick={handleNext} className="cursor-pointer">
              <NextIcon />
            </span>
          </div>
          <p className="text-lg">{content}</p>
          <h3 className="font-bold">{name}</h3>
          <p className="text-gray-600">{position}</p>
          <p className="text-gray-600">{role}</p> {/* Display role */}
        </div>
      </div>
    </div>
  );
};

export { Testimonials };
