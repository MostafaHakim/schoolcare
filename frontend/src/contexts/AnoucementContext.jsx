import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

const AnouncementContext = createContext();

export const AnouncementProvider = ({ children }) => {
  const [anouncements, setAnouncements] = useState([]); // ✅ array
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  //  fetch Anouncement
  useEffect(() => {
    if (!user?.school) {
      return;
    }

    const fetchAnouncement = async () => {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_BASE_URL
          }/api/announcemant?school=${encodeURIComponent(user?.school)}`
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setAnouncements(data);
      } catch (err) {
        setAnouncements([]);
        toast.error("Failed to load classes");
      } finally {
        setLoading(false);
      }
    };

    fetchAnouncement();
  }, [user?.school]);

  //  add new class
  const addAnouncement = async (formData) => {
    try {
      console.log(formData);
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/announcemant`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to create announcemant");
        return null;
      }

      setAnouncements((prev) => [...prev, data]);

      toast.success("Anouncements added successfully 🎉");
      return data;
    } catch (error) {
      toast.error("Server error. Try again later");
      return null;
    }
  };

  return (
    <AnouncementContext.Provider
      value={{ anouncements, loading, addAnouncement }}
    >
      {children}
    </AnouncementContext.Provider>
  );
};

export const useAnouncement = () => useContext(AnouncementContext);
