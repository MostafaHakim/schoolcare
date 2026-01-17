import { useEffect, useState } from "react";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAnouncement } from "../contexts/AnoucementContext";
import { useAuth } from "../contexts/AuthContext";

const AddAnnouncement = () => {
  const navigate = useNavigate();
  const { addAnouncement } = useAnouncement();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    descriptions: "",
    teacher: "",
    school: "",
  });

  useEffect(() => {
    if (user?.username && user?.school) {
      setFormData((prev) => ({
        ...prev,
        teacher: user?.username,
        school: user?.school,
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await addAnouncement(formData);

      setFormData({
        title: "",
        descriptions: "",
        school: formData.school,
        teacher: formData.teacher,
      });

      navigate(-1);
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message || "Failed to publish announcement"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 lg:p-8">
      <Header title="Add Announcement" />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center mt-10 space-y-6"
      >
        <InputField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Please write the subject here"
        />

        <TextAreaField
          label="Description"
          name="descriptions"
          value={formData.descriptions}
          onChange={handleChange}
          placeholder="Write something"
        />

        <button
          type="submit"
          disabled={loading}
          className="px-24 py-3 rounded-full bg-violet-600 text-white font-semibold hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Publishing..." : "Publish"}
        </button>
      </form>
    </div>
  );
};

export default AddAnnouncement;

/* ===== Helper Components ===== */
const Header = ({ title }) => (
  <div className="flex items-center bg-white px-4 py-4 rounded-xl shadow-sm">
    <MoveLeft
      onClick={() => window.history.back()}
      className="cursor-pointer"
    />
    <h1 className="text-lg font-semibold text-gray-800 ml-2">{title}</h1>
  </div>
);

const InputField = ({ label, name, value, onChange, placeholder }) => (
  <div className="w-full lg:w-1/2">
    <label className="text-lg block  font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
    />
  </div>
);

const TextAreaField = ({ label, name, value, onChange, placeholder }) => (
  <div className="w-full lg:w-1/2">
    <label className="block text-lg font-medium text-gray-700 mb-2">
      {label}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={6}
      placeholder={placeholder}
      className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
    />
    <p className="text-right text-xs text-gray-400 mt-1">10000</p>
  </div>
);
