import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoveRight, BookOpen, MoveLeft, UsersRound } from "lucide-react";
import { GoPlus } from "react-icons/go";
import ClassAddModal from "../components/ClassAddModal";
import { useClass } from "../contexts/classContext";
import { useStudent } from "../contexts/studentContext";

const Admission = () => {
  const { classes } = useClass();

  const { students } = useStudent();
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <div className=" ">
        {/* ===== Header ===== */}
        <div className="flex flex-row items-center justify-between bg-white px-4 py-4 rounded-t-2xl lg:border-b-[1px] lg:border-gray-200">
          <div className="flex flex-row items-start justify-start space-x-2">
            <MoveLeft className="flex lg:hidden" />
            <h1 className="text-lg font-semibold text-gray-800">Admission</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 bg-white p-4 lg:p-6">
          <div className="col-span-1 flex flex-row items-center justify-between px-4 lg:px-6 py-4 lg:py-8 border bg-[#9542E71A]/10 border-blue-100 rounded-2xl space-x-4">
            <div className="flex flex-col items-start justify-between w-full space-y-6">
              <span className="text-lg ">See All Students</span>
              <div className="text-2xl lg:text-3xl font-semibold lg:font-bold  text-gray-800">
                {students.length}
              </div>
            </div>
            <div className="flex flex-col items-end justify-between w-full space-y-4">
              <h2 className="text-[#9542E71A]/70 bg-white/90 p-3 border-2 border-gray-200 rounded-full hidden lg:flex">
                <UsersRound />
              </h2>
              <Link
                to="allstudents"
                className="text-gray-900 p-3 border border-gray-300 rounded-full"
              >
                <MoveRight />
              </Link>
            </div>
          </div>
          {classes.map((classItem) => (
            <div
              key={classItem._id}
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
          <button
            className="flex lg:hidden  flex-row items-center justify-center space-x-2 px-8 py-2  h-[48px] rounded-[10px] bg-[#9542e7] text-white w-full"
            onClick={() => setOpen(true)}
          >
            <GoPlus className="text-2xl " />
            <span>Add Class</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Modal box */}
          <div className="relative bg-white w-[90%] max-w-md rounded-xl p-6 z-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Add Class</h2>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <ClassAddModal setOpen={setOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Admission;
