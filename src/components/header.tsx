import Image from "next/image";
import React from "react";
// import {Logo} from "../assets"
const Header = () => {
  return (
    <header className="flex justify-between items-center py-[3%] px-[6%]">
      {/* <Logo/> */}
      <div>
        <Image
          src={"/images/getajob_logo.png"}
          width={65}
          height={65}
          alt="getajob_logo"
        />
      </div>
    
      <nav className="flex justify-between gap-5 items-center">
        <p>Companies</p>
        <p>Candidates</p>
        <p>Assessment</p>
        <p>Post a Job</p>
        <p>Career Advice</p>
      </nav>

      <div className="flex justify-between gap-5 items-center">
        <span>Sign in</span>
        <span>Sign up</span>
      </div>
    </header>
  );
};

export { Header };
