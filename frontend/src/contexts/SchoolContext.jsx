import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const SchoolContext = createContext();
const baseUrl = import.meta.env.VITE_BASE_URL;

export const SchoolProvider = ({ children }) => {
  const [schools, setSchools] = useState([]);
  const [schoolById, setSchoolById] = useState({});
  const [loading, setLoading] = useState(true);

  /* ===== Fetch all homeworks ===== */
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/schools`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setSchools(data.data);
      } catch (err) {
        setSchools([]);
        toast.error("Failed to load Schools");
      } finally {
        setLoading(false);
      }
    };

    fetchSchools();
  }, []);

  /* ===== Add Homework ===== */
  const AddSchools = async (formData) => {
    try {
      const res = await fetch(`${baseUrl}/api/schools`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Failed to create homework");
        return null;
      }

      setSchools((prev) => [...prev, data.data]);
      return data.data;
    } catch (err) {
      toast.error("Server error. Try again later");
      return null;
    }
  };

  // ==============fetch by Id=========================

  const fetchSchoolById = async (id) => {
    try {
      const res = await fetch(`${baseUrl}/api/schools/${id}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setSchoolById(data);
    } catch (err) {
      setSchoolById([]);
      toast.error("Failed to load School");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SchoolContext.Provider
      value={{
        schools,
        schoolById,
        fetchSchoolById,
        AddSchools,
        loading,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => useContext(SchoolContext);
