import { useParams } from "react-router-dom";
import { useSchool } from "../contexts/SchoolContext";
import { useEffect, useState } from "react";
import { Flag } from "lucide-react";
import TeacherAddModal from "../components/TeacherAddModal";
import { useAuth } from "../contexts/AuthContext";
const SchoolDashboard = () => {
  const { id } = useParams();
  const { fetchSchoolById, schoolById } = useSchool();
  const [openModal, setOpenModal] = useState(false);
  const { fetchTeachersBySchool, teachers } = useAuth();
  useEffect(() => {
    if (!id) return;
    fetchSchoolById(id);
  }, []);
  useEffect(() => {
    if (!schoolById) return;
    fetchTeachersBySchool(schoolById["data"]?.school);
  }, []);
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-row items-center justify-between">
        <h2>{schoolById["data"]?.school}</h2>
        <button
          onClick={() => setOpenModal(true)}
          className="px-4 py-2 bg-primary-700 text-white rounded-full"
        >
          Add Teacher
        </button>
      </div>

      <div>
        <div className="flex flex-row items-center justify-between bg-green-500 text-white p-4">
          <div>Teacher Name</div>
          <div>Phone Number</div>
          <div>Teacher ID</div>
        </div>
        {teachers?.map((teacher) => (
          <div className="flex flex-row items-center justify-between bg-gray-100  p-4">
            <div>{teacher.username}</div>
            <div>{teacher.phone}</div>
            <div>{teacher.userId}</div>
          </div>
        ))}
      </div>
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpenModal(false)}
          />

          {/* Modal box */}
          <div className="relative bg-white w-[90%] max-w-[380px] rounded-xl p-2 lg:p-6 z-10">
            <TeacherAddModal setOpenModal={setOpenModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SchoolDashboard;
