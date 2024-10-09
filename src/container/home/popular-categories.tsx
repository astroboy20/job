import Image from "next/image";
import React from "react";

const categoriesData = [
  {
    id: 1,
    type: "Oil and Gas",
    opening: "(20 new jobs)",
    src: "/images/categories/1.svg",
  },
  {
    id: 2,
    type: "Healthcare",
    opening: "(10 new jobs)",
    src: "/images/categories/2.svg",
  },
  {
    id: 3,
    type: "Education",
    opening: "(10 new jobs)",
    src: "/images/categories/3.svg",
  },
  {
    id: 4,
    type: "Accounting",
    opening: "(10 new jobs)",
    src: "/images/categories/3.svg",
  },
  {
    id: 5,
    type: "Design, Art and Multimedia",
    opening: "(10 new jobs)",
    src: "/images/categories/5.svg",
  },
  {
    id: 6,
    type: "Technology",
    opening: "(20 new jobs)",
    src: "/images/categories/6.svg",
  },
  {
    id: 7,
    type: "Security",
    opening: "(10 new jobs)",
    src: "/images/categories/6.svg",
  },
  {
    id: 8,
    type: "Data Analyst",
    opening: "(20 new jobs)",
    src: "/images/categories/8.svg",
  },
];

const PopularCategories = () => {
  return (
    <div className="py-[3%] px-[6%] text-[#3F403F]  mb-[20%] lg:my-0">
      <h1 className="text-center text-[28px] lg:text-[36px] font-[700] mb-5">
        Popular Category
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {categoriesData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col gap-3 border-2 text-center p-5 rounded-[10px] bg-white"
          >
            <div>
              <Image
                src={data.src}
                width={80}
                height={80}
                alt={`${data.type}-image`}
                className="m-auto"
              />
            </div>
            <h2 className="text-[#9B9B9B] text-[18px] lg:text-[21px] font-bold">
              {data.type}
            </h2>
            <p className="text-[#9B9B9B] text-[14px]">{data.opening}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { PopularCategories };
