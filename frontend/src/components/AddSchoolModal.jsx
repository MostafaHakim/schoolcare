import { X } from "lucide-react";
import { useState } from "react";

const AddSchoolModal = ({ setOpenModal, setSchools }) => {
  const [formData, setFormData] = useState({
    school: "",
    address: "",
    eiin: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.school || !formData.address || !formData.eiin) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setMessage("");
      console.log(formData);
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/schools`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      setSchools((prev) => [...prev, data.data]);
      setMessage("School added successfully ✅");
      setFormData({
        school: "",
        address: "",
        eiin: "",
      });
      setOpenModal(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md relative">
      <button
        onClick={() => setOpenModal(false)}
        className="absolute right-0 top-0"
      >
        <X />
      </button>
      <h2 className="text-xl font-semibold mb-4 text-center">Add New School</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">School Name</label>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter school name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter address"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">EIIN</label>
          <input
            type="text"
            name="eiin"
            value={formData.eiin}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter EIIN"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        {message && <p className="text-green-600 text-sm">{message}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Saving..." : "Add School"}
        </button>
      </form>
    </div>
  );
};

export default AddSchoolModal;
