import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
  const { user, userRole, login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentId: "",
    userId: "",
    password: "",
    userRole: "student",
  });

  useEffect(() => {
    if (user && userRole) {
      if (userRole === "teacher") navigate("/teacher", { replace: true });
      else if (userRole === "student") navigate("/student", { replace: true });
    }
  }, [user, userRole, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const u = await login(formData);
    if (!u) return;
    console.log(u);
    if (u.userRole === "teacher") navigate("/teacher", { replace: true });
    else navigate("/student", { replace: true });
  };
  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-400 via-blue-200 to-gray-400 flex items-center justify-center p-3 sm:p-6 relative">
      {/* White Canvas */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      <div className="relative w-full max-w-6xl bg-white rounded-2xl overflow-hidden">
        {/* Decorative SVG (hide on mobile) */}
        <svg
          className="hidden md:block absolute inset-0 w-full h-full"
          viewBox="0 0 1000 600"
          fill="none"
        >
          <path d="M500 0 V600" stroke="#8B5CF6" strokeDasharray="6 6" />
          <path
            d="M1000 0 C700 200 700 400 1000 600"
            stroke="#8B5CF6"
            strokeDasharray="6 6"
          />
          <path
            d="M0 600 C300 400 300 200 0 0"
            stroke="#8B5CF6"
            strokeDasharray="6 6"
          />
        </svg>

        {/* Login Card */}
        <div className="relative z-10 flex items-center justify-center min-h-[520px] px-4">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            {/* Logo */}
            <div className="text-center mb-6">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 flex flex-wrap gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span
                      key={i}
                      className="w-3 h-3 bg-purple-500 rounded-full"
                    />
                  ))}
                </div>
              </div>
              <h1 className="text-2xl font-semibold text-purple-600">
                School Care
              </h1>
            </div>

            {/* Role Switch */}
            <div className="flex border rounded-lg overflow-hidden mb-4">
              {["student", "teacher"].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, userRole: r }))
                  }
                  className={`flex-1 py-2 text-sm font-medium ${
                    formData.userRole === r
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {r === "student" ? "Student" : "Teacher"}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name={formData.userRole === "teacher" ? "userId" : "studentId"}
                value={
                  formData.userRole === "teacher"
                    ? formData.userId
                    : formData.studentId
                }
                onChange={handleChange}
                placeholder={
                  formData.userRole === "teacher" ? "Teacher ID" : "Student ID"
                }
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-500 to-purple-700 hover:opacity-90"
              >
                Login
              </button>
            </form>

            {/* Footer */}
            <p className="mt-4 text-center text-xs text-gray-500">
              By logging in you agree to school policies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
