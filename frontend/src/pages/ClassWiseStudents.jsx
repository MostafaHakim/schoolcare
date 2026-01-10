import { MoveLeft } from "lucide-react";
import { GoPlus } from "react-icons/go";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useStudent } from "../contexts/studentContext";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

const ClassWiseStudents = () => {
  const { name } = useParams();
  const { user } = useAuth();
  const { fetchClassWiseStudent, classStudents } = useStudent();
  const navigate = useNavigate();
  useEffect(() => {
    if (name && user?.school) {
      fetchClassWiseStudent(name, user.school);
    }
  }, [name, user]);

  const students = [
    {
      studenId: "12345",
      name: "Kamal",
      roll: "32",
      class: "3",
    },
    {
      studenId: "12345",
      name: "Kamal",
      roll: "32",
      class: "3",
    },
    {
      studenId: "12345",
      name: "Kamal",
      roll: "32",
      class: "3",
    },
  ];
  return (
    <div className="">
      <div className=" ">
        {/* ===== Header ===== */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-8 lg:space-y-0 bg-white px-4 py-4 rounded-t-2xl lg:border-b-[1px] lg:border-gray-200">
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-between space-x-2">
            <div className="flex flex-row items-center justify-between space-x-2">
              <MoveLeft
                className="flex lg:hidden"
                onClick={() => navigate(-1)}
              />
              <h1 className="text-lg font-semibold text-gray-800">
                All Students
              </h1>
            </div>
            <h2 className="text-xl text-gray-400 font-lexend">
              Total Students {classStudents.length}
            </h2>
          </div>
          <Link
            className=" flex-row items-center justify-center space-x-2 px-8 py-3 rounded-[10px] bg-[#9542e7] text-white hidden lg:flex"
            to="form"
          >
            <GoPlus className="text-2xl " />
            <span>Admit Students</span>
          </Link>
        </div>
        <div className="flex flex-col bg-white p-4 lg:p-6 overflow-x-auto">
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
              {classStudents.map((student, index) => (
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
          <Link
            to="form"
            className=" w-full flex-row mt-4 items-center justify-center space-x-2 px-8 py-3 rounded-[10px] bg-[#9542e7] text-white lg:hidden flex"
          >
            <GoPlus className="text-2xl " />
            <span>Admit Students</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassWiseStudents;
