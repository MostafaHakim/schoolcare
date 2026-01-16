import { ArrowLeft, Eye, MessageCircle, Send, Download } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { BiSolidEditAlt } from "react-icons/bi";
import HomeWorkSubjectCard from "../components/HomeWorkSubjectCard";
import { useHomework } from "../contexts/HomeworkContext";
import { useEffect } from "react";
import Homeworkicon from "../assets/homeworkicon.png";

const TeacherHomeworkDetailPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { fetchHomeworksById, homeworkById } = useHomework();
  console.log(homeworkById);
  useEffect(() => {
    fetchHomeworksById(id);
  }, [id]);
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center  lg:p-4">
      <div className="w-full flex flex-col lg:space-y-4  bg-white  overflow-hidden">
        {/* Header */}
        <div className="hidden lg:flex items-center lg:gap-3  border-b p-8">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={22} />
          </button>
          <h2 className=" font-medium text-2xl">Homework details</h2>
        </div>

        <div className="lg:p-4">
          {/* Image Section */}
          <div className="relative">
            <div className="flex absolute top-6 text-white lg:hidden items-center  px-4 lg:py-3 ">
              <button onClick={() => navigate(-1)}>
                <ArrowLeft size={22} />
              </button>
              <h2 className="text-lg lg:text-xl font-medium">
                Homework details
              </h2>
            </div>
            <img
              src={homeworkById[0]?.image}
              alt="Homework"
              className="w-full h-52 lg:h-72 sm:h-64 object-cover  lg:rounded-2xl"
            />

            <div className="absolute p-2 bg-white rounded-2xl bottom-[-100px] left-2 right-2 md:hidden">
              <HomeWorkSubjectCard
                subject={homeworkById[0]?.subject}
                teacher={homeworkById[0]?.teacher}
                date={homeworkById[0]?.date}
                image={Homeworkicon}
                id={homeworkById[0]?._id}
              />
            </div>
          </div>

          {/* Content */}
          <div className="px-4 py-4 space-y-3 mt-28 md:mt-0">
            <h2 className="text-textc1-700 text-xl">
              {homeworkById[0]?.subject}
            </h2>
            <p className="text-textc2-700 text-lg text-justify">
              {homeworkById[0]?.details}
            </p>
            {/* Stats */}
            <div className="grid grid-cols-2 border border-blue-100 p-4 rounded-xl">
              <div className="col-span-1 flex flex-row items-center justify-center space-x-2 border-blue-100">
                <Eye size={16} />
                <span>32</span>
              </div>

              <div className="col-span-1 flex flex-row items-center justify-center space-x-2">
                <MessageCircle size={16} />
                <span>54 Comment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherHomeworkDetailPage;
