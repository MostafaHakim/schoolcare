import { Outlet } from "react-router-dom";
import StudentMobileBottomNav from "../BottomNav/StudentMobileBottomNav";
import StudentSidebar from "../sidebars/StudentSidebar";
import StudentHeader from "../StudentHeader";

const StudentLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA]">
      <StudentHeader />
      <div className=" flex flex-row">
        <StudentSidebar />
        <main className="flex-1 lg:m-4">
          <Outlet />
        </main>

        <StudentMobileBottomNav />
      </div>
    </div>
  );
};

export default StudentLayout;
