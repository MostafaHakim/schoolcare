import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MoveRight, BookOpen, MoveLeft } from "lucide-react";
import { GoPlus } from "react-icons/go";

const HomeWork = () => {
  const classList = [
    { id: 1, name: "Play" },
    { id: 2, name: "One" },
    { id: 3, name: "Two" },
    { id: 4, name: "Three" },
    { id: 5, name: "Four" },
  ];

  return (
    <div className="">
      <div className=" ">
        {/* ===== Header ===== */}
        <div className="flex flex-row items-center justify-between bg-white px-4 py-4 rounded-t-2xl lg:border-b-[1px] lg:border-gray-200">
          <div className="flex flex-row items-start justify-start space-x-2">
            <MoveLeft className="flex lg:hidden" />
            <h1 className="text-lg font-semibold text-gray-800">Class List</h1>
          </div>

          <button className=" flex-row items-center justify-center space-x-2 px-8 py-3 rounded-[10px] bg-[#9542e7] text-white hidden lg:flex">
            <GoPlus className="text-2xl " />
            <span>Add Class</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 bg-white p-4 lg:p-6">
          {classList.map((classItem) => (
            <div
              key={classItem.id}
              className="col-span-1 flex flex-row items-center justify-between px-4 lg:px-6 py-4 lg:py-8 border border-blue-100 rounded-2xl space-x-4"
            >
              <div className="flex flex-col items-start justify-between w-full space-y-6">
                <span className="text-lg ">Class</span>
                <div className="text-2xl lg:text-3xl font-semibold lg:font-bold  text-gray-800">
                  {classItem.name}
                </div>
              </div>
              <div className="flex flex-col items-end justify-between w-full space-y-4">
                <h2 className="text-[#7efff5] bg-[#7efff5]/20 p-3  rounded-full hidden lg:flex">
                  <BookOpen />
                </h2>
                <Link
                  to={`${classItem.name}`}
                  className="text-gray-900 p-3 border border-gray-300 rounded-full"
                >
                  <MoveRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button className="flex lg:hidden  flex-row items-center justify-center space-x-2 px-8 py-2 w-[175px] h-[48px] rounded-[10px] bg-[#9542e7] text-white w-full">
            <GoPlus className="text-2xl " />
            <span>Add Class</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeWork;
