import { Users } from "lucide-react";
import SectionHeader from "../../components/common/SectionHeader";
import StatCard from "../../components/common/StatCard";
import ProgressBar from "../../components/common/ProgressBar";
import { Link } from "react-router-dom";
import { useStudent } from "../../contexts/studentContext";

const TeacherDashboard = () => {
  const { students } = useStudent();
  return (
    <div className="p-4 sm:p-6 space-y-8 bg-white/90">
      <div className="lg:hidden">
        <SectionHeader
          title="Good Morning!"
          subtitle="☀️ Let’s get ready to go to your school"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Average Performance */}
        <StatCard
          title="Average performance"
          value="34%"
          order="order-2 lg:order-1"
        >
          <ProgressBar
            value={34}
            gradient="linear-gradient(90deg,#22c55e,#facc15,#fb7185)"
          />
        </StatCard>

        {/* Today Present */}
        <StatCard
          title="Today Present"
          value="186"
          footer="Good"
          order="order-3"
        >
          <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
            <div className="h-full w-[70%] bg-gradient-to-r from-green-400 to-red-400" />
          </div>
        </StatCard>

        {/* Total Students */}
        <StatCard
          title="Total Students"
          value={students.length}
          icon={Users}
          order="order-1 lg:order-3"
        />
      </div>
      <div className="py-8">
        <h2 className="text-2xl  font-lexend font-semibold py-4">News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 lg:gap-16 p-4">
          <div className="col-span-1 flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 text-sm text-gray-600 border border-blue-100 p-4 rounded-lg">
            <img
              src="https://picsum.photos/300/200.jpg"
              className="w-1/4 md:w-full rounded-lg"
              alt="img"
            />
            <div className="flex flex-col">
              <h3 className="text-md text-gray-600  font-semibold">
                text of the printing and typesetting industry. Lorem
              </h3>
              <p className="line-clamp-2 md:line-clamp-3 text-gray-500">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <Link className="text-violet-600">See More</Link>
            </div>
          </div>
          <div className="col-span-1 flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 text-sm text-gray-600 border border-blue-100 p-4 rounded-lg">
            <img
              src="https://picsum.photos/300/200.jpg"
              className="w-1/4 md:w-full rounded-lg"
              alt="img"
            />
            <div className="flex flex-col">
              <h3 className="text-md text-gray-600  font-semibold">
                text of the printing and typesetting industry. Lorem
              </h3>
              <p className="line-clamp-2 md:line-clamp-3 text-gray-500">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <Link className="text-violet-600">See More</Link>
            </div>
          </div>
          <div className="col-span-1 flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 text-sm text-gray-600 border border-blue-100 p-4 rounded-lg">
            <img
              src="https://picsum.photos/300/200.jpg"
              className="w-1/4 md:w-full rounded-lg"
              alt="img"
            />
            <div className="flex flex-col">
              <h3 className="text-md text-gray-600  font-semibold">
                text of the printing and typesetting industry. Lorem
              </h3>
              <p className="line-clamp-2 md:line-clamp-3 text-gray-500">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <Link className="text-violet-600">See More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
