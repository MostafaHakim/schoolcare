import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import AddSchoolModal from "../components/AddSchoolModal";
import axios from "axios";
import { Link } from "react-router-dom";

const SchoolManagement = () => {
  const [openModal, setOpenModal] = useState(false);
  const [schools, setSchools] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    fetch(`${baseUrl}/api/schools`)
      .then((res) => res.json())
      .then((data) => setSchools(data.data));
  }, []);

  return (
    <div className="lg:bg-white lg:min-h-screen rounded-2xl">
      <div className="flex flex-row items-center justify-between border-b-2 border-gray-100 p-6 lg:py-8">
        <h2 className="text-[17px] lg:text-[24px]">School Management</h2>
        <button
          onClick={() => setOpenModal(true)}
          className="flex flex-row items-center bg-primary-700 text-white px-6 py-3 rounded-lg text-[17px] lg:text-[20px]"
        >
          <span>
            <Plus />
          </span>
          <span>Add New School</span>
        </button>
      </div>
      <div className="flex flex-col p-4">
        <h2 className="text-[17px] lg:text-[20px] underline font-lexend py-4">
          All School
        </h2>
        <div className="flex flex-row items-center justify-between py-2 bg-green-500 text-white px-8">
          <div>SL</div>
          <div>School Name</div>
          <div>School Address</div>
          <div>EIIN Number</div>
          <div>Action</div>
        </div>
        {schools.map((school, i) => (
          <div
            className={`flex flex-row items-center justify-between py-2 ${i % 2 ? "bg-gray-100" : "bg-white"} text-stone-950 px-8`}
            key={i}
          >
            <div>{i + 1}</div>
            <div>{school.school}</div>
            <div>{school.address}</div>
            <div>{school.eiin}</div>
            <Link
              to={school._id}
              className="text-red-600 px-4 py-1 border border-red-600 text-[16px] rounded-2xl bg-amber-red/20"
            >
              Visit
            </Link>
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
            <AddSchoolModal
              setOpenModal={setOpenModal}
              setSchools={setSchools}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SchoolManagement;
