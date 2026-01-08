import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import PerformancePage from "./pages/PerformancePage";
import NoticePage from "./pages/NoticePage";
import NoticeDetailPage from "./pages/NoticeDetailPage";
import HomeworkPage from "./pages/HomeworkPage";
import HomeworkDetailPage from "./pages/HomeworkDetailPage";
import ComingSoonPage from "./pages/ComingSoonPage";

import TeacherDashboard from "./pages/dashboards/TeacherDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import Classes from "./pages/HomeWork";
import RoleBasedRoute from "./middleware/roleBaseRoutes";
import TeacherLayout from "./components/layouts/TeacherLayout";
import StudentLayout from "./components/layouts/StudentLayout";
import HomeWork from "./pages/HomeWork";
import ClassWiseHomeWork from "./pages/ClassWiseHomeWork";
import AddHomeWork from "./components/AddHomeWork";
import TeacherHomeworkDetailPage from "./components/TeacherHomeworkDetailPage";

/* ---------- Protected Route ---------- */
const ProtectedLayout = () => {
  const { loading } = useAuth();
  const token = localStorage.getItem("token");
  if (loading) return <div>Loading...</div>;

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Layout />;
};

/* ---------- Dashboard Redirect ---------- */
const DashboardRouter = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;

  switch (user.userRole) {
    case "teacher":
      return <TeacherDashboard />;
    case "admin":
      return <AdminDashboard />;
    default:
      return <HomePage />;
  }
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          {/* Teacher */}
          <Route
            path="/teacher"
            element={
              <RoleBasedRoute allowedRoles={["teacher"]}>
                <TeacherLayout />
              </RoleBasedRoute>
            }
          >
            <Route index element={<TeacherDashboard />} />
            <Route path="homework" element={<HomeWork />} />
            <Route path="homework/:name" element={<ClassWiseHomeWork />} />
            <Route
              path="homework/:name/:id"
              element={<TeacherHomeworkDetailPage />}
            />
            <Route
              path="homework/:name/addhomework"
              element={<AddHomeWork />}
            />
            <Route path="profile" element={<ProfilePage />} />
          </Route>

          {/* Student */}
          <Route
            path="/"
            element={
              <RoleBasedRoute allowedRoles={["student"]}>
                <StudentLayout />
              </RoleBasedRoute>
            }
          >
            <Route index element={<HomePage />} />
            <Route path="performance" element={<PerformancePage />} />
          </Route>

          {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
