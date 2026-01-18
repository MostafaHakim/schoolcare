import { useEffect, useState } from "react";
import { EllipsisVertical, MoveLeft } from "lucide-react";
import { useStudent } from "../contexts/studentContext";
import Icon from "../assets/icon.png";
const AllStudents = () => {
  const { students } = useStudent();
  return (
    <div className="">
      <div className=" ">
        {/* ===== Header ===== */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0 py-4 lg:py-8 lg:px-4 lg:bg-white rounded-t-2xl lg:border-b-[1px] lg:border-gray-200">
          <div className="flex flex-row items-center justify-between space-x-2">
            <MoveLeft className="flex" />
            <h1 className="text-[14px] font-lexend lg:text-[24px] font-semibold text-textc1-700">
              All Students
            </h1>
          </div>
          <h2 className="hidden lg:block text-2xl font-lexend  text-primary-700">
            Total Students {students.length}
          </h2>
        </div>

        <div className="flex flex-row justify-between items-center lg:hidden text-[17px] font-lexend  px-4 py-3 bg-white rounded-[12px] mb-4">
          <h2 className="text-primary-700">Total Students</h2>
          <span className="text-primary-700">{students.length}</span>
        </div>

        <div className="bg-white   overflow-x-auto hidden lg:block">
          <div>
            <div className="grid grid-cols-12 border-b border-gray-100 py-3 px-4 text-[20px] text-textc1-700">
              <p className="col-span-1 px-3 py-2"></p>
              <p className="col-span-2 px-3 py-2 ">Student ID</p>
              <p className="col-span-2 px-3 py-2 ">Name</p>
              <p className="col-span-2 px-3 py-2 "></p>
              <p className="col-span-2 px-3 py-2 ">Roll</p>
              <p className="col-span-2 px-3 py-2 ">Class</p>
              <p className="col-span-1 px-3 py-2 "></p>
            </div>
            <div>
              {students.map((student, index) => (
                <div
                  key={index}
                  className="hover:bg-gray-50 transition grid grid-cols-12 text-[17px] text-textc2-700 py-2 items-center px-4"
                >
                  <p className="col-span-1 px-3 py-2 ">{index + 1}</p>
                  <p className="col-span-2 px-3 py-2 ">{student.studentId}</p>
                  <p className="col-span-2 px-3 py-2 ">{student.name}</p>
                  <p className="col-span-2 px-3 py-2 "></p>
                  <p className="col-span-2 px-3 py-2 ">{student.roll}</p>
                  <p className="col-span-2 px-3 py-2 ">{student.classId}</p>

                  <EllipsisVertical size={16} className="col-span-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile view more */}
          <span className="flex lg:hidden justify-center mt-4 bg-blue-100 rounded-md w-full py-2">
            View More
          </span>
        </div>
        <div className="flex flex-col space-y-2  ">
          {students.map((student, indix) => (
            <div className="lg:hidden bg-white p-2 rounded-[12px]">
              <div className="flex flex-row items-center justify-between p-2 rounded-[12px] border border-gray-100">
                <div className="flex flex-row items-center justify-start space-x-2">
                  <img
                    className="w-[51px] rounded-[8px]"
                    src={Icon}
                    alt="Icon"
                  />
                  <div>
                    <h3 className="text-[17px] text-black">{student.name}</h3>
                    <p className="text-[12px] text-gray-500">
                      Student ID: {student.studentId}
                    </p>
                  </div>
                </div>
                <EllipsisVertical size={16} />
              </div>

              <div className="text-[14px] text-textc2-700">
                <h2>Address: {student.school}</h2>
                <h2>Role: {student.roll}</h2>
                <h2>Class: {student.classId}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
