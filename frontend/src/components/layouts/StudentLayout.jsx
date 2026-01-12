import { Outlet } from "react-router-dom";
import Header from "../Header";
import StudentMobileBottomNav from "../BottomNav/StudentMobileBottomNav";
import StudentSidebar from "../sidebars/StudentSidebar";

const StudentLayout = () => {
  return (
    <div className="min-h-screen bg-[#F7F8FA] flex">
      <StudentSidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6">
          <Outlet />
        </main>

        <StudentMobileBottomNav />
      </div>
    </div>
  );
};

export default StudentLayout;
