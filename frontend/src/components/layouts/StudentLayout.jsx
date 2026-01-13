import { Outlet } from "react-router-dom";
import Header from "../Header";
import StudentMobileBottomNav from "../BottomNav/StudentMobileBottomNav";
import StudentSidebar from "../sidebars/StudentSidebar";

const StudentLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA]">
      <Header />
      <div className=" flex flex-row">
        <StudentSidebar />
        <main className="flex-1 p-2 lg:p-4 pb-24 lg:pb-6">
          <Outlet />
        </main>

        <StudentMobileBottomNav />
      </div>
    </div>
  );
};

export default StudentLayout;
