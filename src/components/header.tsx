import Image from "next/image";
import React from "react";
// import {Logo} from "../assets"
const Header = () => {
  return (
    <header className="flex justify-between items-center ">
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
        <span>Sign up</span>
        <span className="bg-[#06942A33] rounded-full px-10 py-2">Login </span>
      </div>
    </header>
  );
};

export { Header };
