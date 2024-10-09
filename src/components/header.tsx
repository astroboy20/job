"use client";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4">
      <div>
        <Image
          src={"/images/getajob_logo.png"}
          width={65}
          height={65}
          alt="getajob_logo"
        />
      </div>

      {/* Menu for larger screens */}
      <nav className="hidden lg:flex gap-5 items-center">
        <p>Companies</p>
        <p>Candidates</p>
        <p>Assessment</p>
        <p>Post a Job</p>
        <p>Career Advice</p>
      </nav>

      {/* Login/Signup for larger screens */}
      <div className="hidden lg:flex justify-between gap-5 items-center">
        <span>Sign up</span>
        <span className="bg-[#06942A33] rounded-full px-5 py-2">Login</span>
      </div>

      {/* Hamburger Menu for smaller screens */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu that shows when isMenuOpen is true */}
      {isMenuOpen && (
        <nav className="flex flex-col gap-5 items-center absolute top-16 left-0 right-0 bg-white w-full lg:hidden h-[100dvh]">
          <p>Companies</p>
          <p>Candidates</p>
          <p>Assessment</p>
          <p>Post a Job</p>
          <p>Career Advice</p>

          <div className="flex flex-col items-center gap-3">
            <span>Sign up</span>
            <span className="bg-[#06942A33] rounded-full px-5 py-2">Login</span>
          </div>
        </nav>
      )}
    </header>
  );
};

export { Header };
