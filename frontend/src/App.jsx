import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";
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
import { ClassProvider } from "./contexts/classContext";
import { HomeworkProvider } from "./contexts/HomeworkContext";
import Admission from "./pages/Admission";
import AllStudents from "./pages/AllStudents";
import ClassWiseStudents from "./pages/ClassWiseStudents";
import AdmissionForm from "./components/AdmissionForm";
import StudentDashboard from "./pages/dashboards/StudentDashboard";
import AuthorLayout from "./components/layouts/AuthorLayout";
import { StudentProvider } from "./contexts/studentContext";

function App() {
  return (
    <>
      {" "}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
      <Router>
        <AuthProvider>
          <ClassProvider>
            <HomeworkProvider>
              <StudentProvider>
                <Routes>
                  <Route path="/login" element={<LoginPage />} />

                  {/* ==================Author===================== */}
                  <Route
                    path="/admin"
                    element={
                      <RoleBasedRoute allowedRoles={["author"]}>
                        <AuthorLayout />
                      </RoleBasedRoute>
                    }
                  >
                    <Route index element={<AdminDashboard />} />
                  </Route>

                  {/* ==================Teacher===================== */}
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
                    <Route
                      path="homework/:name"
                      element={<ClassWiseHomeWork />}
                    />
                    <Route
                      path="homework/:name/:id"
                      element={<TeacherHomeworkDetailPage />}
                    />
                    <Route
                      path="homework/:name/addhomework"
                      element={<AddHomeWork />}
                    />

                    <Route path="admission" element={<Admission />} />
                    <Route
                      path="admission/allstudents"
                      element={<AllStudents />}
                    />
                    <Route
                      path="admission/:name"
                      element={<ClassWiseStudents />}
                    />
                    <Route
                      path="admission/:name/form"
                      element={<AdmissionForm />}
                    />
                    <Route path="profile" element={<ProfilePage />} />
                  </Route>

                  {/*===================== Student =====================*/}
                  <Route
                    path="/student"
                    element={
                      <RoleBasedRoute allowedRoles={["student"]}>
                        <StudentLayout />
                      </RoleBasedRoute>
                    }
                  >
                    <Route index element={<HomePage />} />
                    <Route path="performance" element={<PerformancePage />} />
                    <Route path="homework" element={<HomeworkPage />} />
                    <Route
                      path="homework/:id"
                      element={<HomeworkDetailPage />}
                    />
                    <Route path="results" element={<ComingSoonPage />} />
                    <Route path="finance" element={<ComingSoonPage />} />
                    <Route path="profile" element={<ComingSoonPage />} />
                    <Route path="settings" element={<ProfilePage />} />
                  </Route>

                  {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
                </Routes>
              </StudentProvider>
            </HomeworkProvider>
          </ClassProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
