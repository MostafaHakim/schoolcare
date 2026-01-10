import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useHomework } from "../contexts/HomeworkContext";
import { useAuth } from "../contexts/AuthContext";

const HomeworkPage = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(3);
  const datesContainerRef = useRef(null);

  const { user } = useAuth();
  const { fetchHomeworksByClassForStudent, studentHomeworkByClass } =
    useHomework();

  useEffect(() => {
    if (user?.classId) {
      fetchHomeworksByClassForStudent(user?.classId, user?.school);
    }
  }, [user?.school, user?.classId]);
  console.log(user.school, user.classId);
  const dates = [
    { day: "30", label: "Wed" },
    { day: "31", label: "Thu" },
    { day: "02", label: "Fri" },
    { day: "01", label: "Sat" },
    { day: "03", label: "Sun" },
    { day: "04", label: "Mon" },
    { day: "05", label: "Tue" },
  ];

  return (
    <div
      className="min-h-screen bg-gray-50 px-3 py-4 space-y-4 
                    xs:px-4 xs:space-y-5 
                    sm:px-5 sm:space-y-6 
                    md:p-6 md:space-y-6"
    >
      {/* ===== Header ===== */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600 text-lg p-1"
        >
          ←
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Homework</h1>
      </div>

      {/* ===== Calendar Strip ===== */}
      <div
        className="bg-white rounded-2xl border p-4 
                      xs:p-3"
      >
        {/* For screens below 640px (mobile) */}
        <div className="md:hidden">
          {/* Top section: Month and Today buttons */}
          <div
            className="flex items-center justify-between mb-3 
                          xs:mb-4"
          >
            <span
              className="text-sm font-medium text-gray-700 
                             xs:text-base"
            >
              August 2025
            </span>
            <div className="flex items-center gap-2">
              <button
                className="p-1.5 rounded-full bg-gray-100 
                                 xs:p-2"
              >
                <ChevronLeft className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
              </button>
              <span
                className="text-sm text-gray-600 
                               xs:text-base"
              >
                Today
              </span>
              <button
                className="p-1.5 rounded-full bg-gray-100 
                                 xs:p-2"
              >
                <ChevronRight className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
              </button>
            </div>
          </div>

          {/* Date selection - Horizontal scroll */}
          <div className="relative">
            <div
              ref={datesContainerRef}
              className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-hide
                         xs:gap-2"
            >
              {dates.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  className={`flex flex-col items-center justify-center rounded-xl text-xs flex-shrink-0
                             w-11 h-14
                             xs:w-12 xs:h-14
                             sm:w-14 sm:h-16
                    ${
                      selectedIndex === i
                        ? "bg-[#6C5DD3] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  <span
                    className="text-[9px] font-medium 
                                   xs:text-[10px] 
                                   sm:text-[11px]"
                  >
                    {d.label}
                  </span>
                  <span
                    className="text-sm font-semibold
                                   xs:text-base 
                                   sm:text-lg"
                  >
                    {d.day}
                  </span>
                </button>
              ))}
            </div>

            {/* Gradient fade for scroll indication */}
            <div className="absolute right-0 top-0 bottom-1 w-6 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </div>

        {/* For screens 768px and above (desktop) */}
        <div className="hidden md:flex md:items-center md:justify-between">
          {/* Month */}
          <span className="text-sm font-medium text-gray-700">August 2025</span>

          {/* Dates */}
          <div className="flex items-center gap-2">
            {dates.map((d, i) => (
              <Link
                key={i}
                onClick={() => setSelectedIndex(i)}
                className={`flex flex-col items-center justify-center w-10 h-12 rounded-xl text-xs
                  ${
                    selectedIndex === i
                      ? "bg-[#6C5DD3] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                <span className="text-[10px]">{d.label}</span>
                <span className="font-semibold">{d.day}</span>
              </Link>
            ))}
          </div>

          {/* Today */}
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full bg-gray-100">
              <ChevronLeft size={16} />
            </button>
            <span className="text-sm text-gray-600">Today</span>
            <button className="p-2 rounded-full bg-gray-100">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ===== Homework Cards ===== */}
      <div
        className="grid grid-cols-1 gap-4 
                      xs:gap-4 
                      sm:grid-cols-2 sm:gap-4 
                      md:grid-cols-2 md:gap-5 
                      lg:grid-cols-3 lg:gap-6"
      >
        {studentHomeworkByClass.map((item) => (
          <Link
            to={item._id}
            key={item._id}
            onClick={() => navigate(`details`)}
            className="bg-white rounded-2xl border overflow-hidden cursor-pointer hover:shadow-md transition active:scale-[0.98] 
                       sm:active:scale-100"
          >
            {/* Image */}
            <div
              className="h-40 
                            xs:h-44 
                            sm:h-40 
                            md:h-36 
                            lg:h-40"
            >
              <img
                src={item.image}
                alt="book"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div
              className="p-3 space-y-1 
                            xs:p-4 
                            md:p-3 
                            lg:p-4"
            >
              <h3
                className="font-semibold text-gray-800 text-base
                             xs:text-lg
                             sm:text-base
                             md:text-base"
              >
                {item.subject}
              </h3>
              <p
                className="text-sm text-gray-500
                            xs:text-base
                            sm:text-sm"
              >
                {item.teacher}
              </p>
              <p
                className="text-xs text-gray-400
                            xs:text-sm
                            sm:text-xs"
              >
                {new Date(item.createdAt).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeworkPage;
