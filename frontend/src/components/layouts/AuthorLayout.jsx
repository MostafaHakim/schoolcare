import { Outlet } from "react-router-dom";
import Header from "../TeacherHeader";
import MobileBottomNav from "../BottomNav/TeacherMobileBottomNav";
import TeacherSidebar from "../sidebars/StudentSidebar";
import StudentSidebar from "../sidebars/StudentSidebar";

const AuthorLayout = () => {
  return (
    <div className="min-h-screen bg-[#F7F8FA] flex">
      <StudentSidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6">
          <Outlet />
        </main>

        <MobileBottomNav />
      </div>
    </div>
  );
};

export default AuthorLayout;
