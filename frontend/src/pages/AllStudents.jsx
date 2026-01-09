import { useEffect, useState } from "react";
import { MoveLeft } from "lucide-react";
import { useStudent } from "../contexts/studentContext";

const AllStudents = () => {
  const { students } = useStudent();
  return (
    <div className="">
      <div className=" ">
        {/* ===== Header ===== */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-8 lg:space-y-0 bg-white px-4 py-4 rounded-t-2xl lg:border-b-[1px] lg:border-gray-200">
          <div className="flex flex-row items-center justify-between space-x-2">
            <MoveLeft className="flex lg:hidden" />
            <h1 className="text-lg font-semibold text-gray-800">
              All Students
            </h1>
          </div>
          <h2 className="text-2xl text-gray-400 font-lexend">
            Total Students {students.length}
          </h2>
        </div>
        <div className="bg-white p-4 lg:p-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-3 py-2 border">Student ID</th>
                <th className="px-3 py-2 border">Name</th>
                <th className="px-3 py-2 border">Roll</th>
                <th className="px-3 py-2 border">Class</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student, index) => (
                <tr key={index} className="hover:bg-gray-50 transition">
                  <td className="px-3 py-2 border">{student.studentId}</td>
                  <td className="px-3 py-2 border">{student.name}</td>
                  <td className="px-3 py-2 border">{student.roll}</td>
                  <td className="px-3 py-2 border">{student.classId}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile view more */}
          <span className="flex lg:hidden justify-center mt-4 bg-blue-100 rounded-md w-full py-2">
            View More
          </span>
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
