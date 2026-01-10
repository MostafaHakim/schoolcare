import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

const ClassContext = createContext();

export const ClassProvider = ({ children }) => {
  const [classes, setClasses] = useState([]); // ✅ array
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  // ✅ fetch classes
  useEffect(() => {
    if (!user?.school) {
      return;
    }

    const fetchClasses = async () => {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_BASE_URL
          }/api/classes?school=${encodeURIComponent(user?.school)}`
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setClasses(data);
      } catch (err) {
        setClasses([]);
        toast.error("Failed to load classes");
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, [user?.school]);

  //  add new class
  const addNewClass = async (formData) => {
    console.log(formData);
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/classes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to create class");
        return null;
      }

      setClasses((prev) => [...prev, data]);

      toast.success("Class added successfully 🎉");
      return data;
    } catch (error) {
      toast.error("Server error. Try again later");
      return null;
    }
  };

  return (
    <ClassContext.Provider value={{ classes, loading, addNewClass }}>
      {children}
    </ClassContext.Provider>
  );
};

export const useClass = () => useContext(ClassContext);
