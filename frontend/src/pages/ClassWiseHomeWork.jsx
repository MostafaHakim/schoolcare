import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MoveRight, BookOpen, MoveLeft } from "lucide-react";
import { GoPlus } from "react-icons/go";
import CalendarHeader from "../components/CalendarHeader";
import HomeWorkSubjectCard from "../components/HomeWorkSubjectCard";

const ClassWiseHomeWork = () => {
  const { name } = useParams();
  const [homeWorks, setHomeWorks] = useState({});

  const homeWorksData = [
    {
      id: 1,
      subject: "Bangla",
      image: "https://picsum.photos/300/200",
      teacher: "Abdullah Al Shams",
      date: new Date(),
    },
    {
      id: 2,
      subject: "English",
      image: "https://picsum.photos/300/200",
      teacher: "Al Boshir",
      date: new Date(),
    },
    {
      id: 3,
      subject: "Mathmatics",
      image: "https://picsum.photos/300/200",
      teacher: "Borkot ahamed",
      date: new Date(),
    },
    {
      id: 4,
      subject: "Science",
      image: "https://picsum.photos/300/200",
      teacher: "Rabbani khan",
      date: new Date(),
    },
  ];

  return (
    <div className=" bg-white/90 flex flex-col space-y-4">
      {/* ===== Header ===== */}
      <div className="flex flex-row items-center justify-between bg-white px-4 py-4 rounded-t-2xl lg:border-b-[1px] lg:border-gray-200">
        <div className="flex flex-row items-start justify-start space-x-2">
          <MoveLeft className="flex lg:hidden" />
          <h1 className="text-lg font-semibold text-gray-800">Class {name}</h1>
        </div>

        <Link
          to="addhomework"
          className=" flex-row items-center justify-center space-x-2 px-8 py-3  rounded-[10px] bg-[#9542e7] text-white hidden lg:flex"
        >
          <GoPlus className="text-2xl " />
          <span>Add Homework</span>
        </Link>
      </div>
      {/* ===== Date Selector ===== */}
      <div className="p-4">
        <CalendarHeader />
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {homeWorksData.map((item) => (
          <div key={item.id}>
            <HomeWorkSubjectCard
              subject={item.subject}
              teacher={item.teacher}
              date={item.date}
              image={item.image}
              id={item.id}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-between bg-white px-4 py-4 rounded-t-2xl lg:border-b-[1px] lg:border-gray-200">
        <Link
          to="addhomework"
          className=" flex-row items-center justify-center space-x-2 px-8 py-3  rounded-[10px] bg-[#9542e7] text-white lg:hidden flex w-full"
        >
          <GoPlus className="text-2xl" />
          <span>Add Homework</span>
        </Link>
      </div>
    </div>
  );
};

export default ClassWiseHomeWork;
