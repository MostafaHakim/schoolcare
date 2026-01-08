import { Outlet } from "react-router-dom";
import Header from "../Header";
import TeacherSidebar from "../sidebars/TeacherSidebar";
import TeacherMobileBottomNav from "../BottomNav/TeacherMobileBottomNav";

const TeacherLayout = () => {
  return (
    <div className="min-h-screen bg-[#F7F8FA] flex">
      <TeacherSidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6">
          <Outlet />
        </main>

        <TeacherMobileBottomNav />
      </div>
    </div>
  );
};

export default TeacherLayout;
