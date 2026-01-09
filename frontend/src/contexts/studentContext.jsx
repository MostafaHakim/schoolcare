import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  //  fetch student
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/student`);

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setStudents(data);
      } catch (err) {
        setStudents([]);
        toast.error("Failed to load classes");
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, []);

  return (
    <StudentContext.Provider value={{ students, loading, setStudents }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => useContext(StudentContext);
