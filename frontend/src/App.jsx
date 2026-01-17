import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/LoginPage";
import PerformancePage from "./pages/PerformancePage";
import NoticeDetailPage from "./pages/NoticeDetailPage";
import HomeworkPage from "./pages/HomeworkPage";
import HomeworkDetailPage from "./pages/HomeworkDetailPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import TeacherDashboard from "./pages/dashboards/TeacherDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import RoleBasedRoute from "./middleware/roleBaseRoutes";
import TeacherLayout from "./components/layouts/TeacherLayout";
import StudentLayout from "./components/layouts/StudentLayout";
import HomeWork from "./pages/HomeWork";
import ClassWiseHomeWork from "./pages/ClassWiseHomeWork";
import AddHomeWork from "./components/AddHomeWork";
import TeacherHomeworkDetailPage from "./components/TeacherHomeworkDetailPage";
import { HomeworkProvider } from "./contexts/HomeworkContext";
import Admission from "./pages/Admission";
import AllStudents from "./pages/AllStudents";
import ClassWiseStudents from "./pages/ClassWiseStudents";
import AdmissionForm from "./components/AdmissionForm";
import StudentDashboard from "./pages/dashboards/StudentDashboard";
import AuthorLayout from "./components/layouts/AuthorLayout";
import { StudentProvider } from "./contexts/studentContext";
import Announcement from "./pages/Announcement";
import AddAnouncement from "./components/AddAnouncement";
import { AnouncementProvider } from "./contexts/AnoucementContext";
import Attendance from "./pages/Attendance";
import ClassWiseAttendance from "./pages/ClassWiseAttendance";
import { AttendanceProvider } from "./contexts/AttendanceContext";
import { SocketProvider } from "./contexts/SocketContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import Splash from "./pages/Splash";
import { useEffect, useState } from "react";
import Notification from "./pages/Notification";
import { ClassProvider } from "./contexts/classContext";
import StudentAnnouncenmect from "./pages/StudentAnnouncement";
import StudentProfilePage from "./pages/StudentProfilePage";
import TeacherProfile from "./components/TeacherProfile";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Splash loading={loading} setLoading={setLoading} />;
  }
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
                <AnouncementProvider>
                  <AttendanceProvider>
                    <SocketProvider>
                      <NotificationProvider>
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
                            <Route path="attendance" element={<Attendance />} />
                            <Route
                              path="attendance/:name"
                              element={<ClassWiseAttendance />}
                            />

                            <Route
                              path="announcement"
                              element={<Announcement />}
                            />

                            <Route
                              path="announcement/form"
                              element={<AddAnouncement />}
                            />

                            <Route
                              path="results"
                              element={<ComingSoonPage />}
                            />

                            <Route
                              path="finance"
                              element={<ComingSoonPage />}
                            />
                            <Route path="chat" element={<ComingSoonPage />} />
                            <Route path="notice" element={<ComingSoonPage />} />

                            <Route
                              path="profile"
                              element={<TeacherProfile />}
                            />
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
                            <Route index element={<StudentDashboard />} />
                            <Route
                              path="performance"
                              element={<PerformancePage />}
                            />
                            <Route path="homework" element={<HomeworkPage />} />
                            <Route
                              path="homework/:id"
                              element={<HomeworkDetailPage />}
                            />
                            <Route
                              path="results"
                              element={<ComingSoonPage />}
                            />
                            <Route
                              path="announcement/:id"
                              element={<StudentAnnouncenmect />}
                            />
                            <Route
                              path="finance"
                              element={<ComingSoonPage />}
                            />
                            <Route
                              path="/student/notice"
                              element={<Notification />}
                            />
                            <Route
                              path="/student/notice/:id"
                              element={<NoticeDetailPage />}
                            />
                            <Route
                              path="profile"
                              element={<StudentProfilePage />}
                            />
                            <Route
                              path="settings"
                              element={<ComingSoonPage />}
                            />
                            <Route
                              path="about-us"
                              element={<ComingSoonPage />}
                            />
                            <Route
                              path="terms-conditions"
                              element={<ComingSoonPage />}
                            />
                          </Route>

                          <Route
                            path="*"
                            element={<Navigate to="/login" replace />}
                          />
                        </Routes>
                      </NotificationProvider>
                    </SocketProvider>
                  </AttendanceProvider>
                </AnouncementProvider>
              </StudentProvider>
            </HomeworkProvider>
          </ClassProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
