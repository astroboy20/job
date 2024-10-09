import { Header } from "@/components/header";
import React from "react";
import { HeroSection } from "./hero-section";
import { HowItWorks } from "./how-it-works";
import { Proof } from "./proof";
import { Footer } from "@/components/footer";
import { JobPosting } from "./job-posting";
import { PopularCategories } from "./popular-categories";
import { GetStarted } from "./get-started";
import { Testimonials } from "./testimonials";
const HomeContainer = () => {
  return (
    <div className=" ">
      <Header />
      <HeroSection />
      <JobPosting />
      <HowItWorks />
      <PopularCategories />
      <Proof />
      <Testimonials/>
      <GetStarted/>
      <Footer />
    </div>
  );
};

export { HomeContainer };
