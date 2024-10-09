import React from "react";

const GetStarted = () => {
  return (
    <div className="px-[6%] py-[3%] my-[10%] lg:my-0">
      <div className="relative bg-[url('/images/get-started.png')] bg-cover bg-no-repeat h-fit lg:h-[350px] w-full p-10 rounded-[8px] shadow text-left flex items-end flex-col gap-3 text-white">
 
        <div className="absolute inset-0 bg-black opacity-40 rounded-[8px]" /> 
        <div className="relative z-10 flex flex-col gap-3">
          <h1 className="text-[36px] lg:text-[48px] font-[700] text-shadow"> 
            Get a Job you actually like
          </h1>
          <p className="text-left font-[500]">
            Create an account and start applying
          </p>
          <span className="bg-[#06942A] px-5 py-2 w-fit rounded-full">
            Get started
          </span>
        </div>
      </div>
    </div>
  );
};

export { GetStarted };
