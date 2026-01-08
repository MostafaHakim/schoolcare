import {
  Users,
  UserCog,
  Bell,
  BarChart3
} from 'lucide-react';
import SectionHeader from '../../components/common/SectionHeader';
import StatCard from '../../components/common/StatCard';

const AdminDashboard = () => {
  return (
    <div className="p-4 sm:p-6 space-y-6">
      <SectionHeader title="Admin Dashboard" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Students" value="231" icon={Users} />
        <StatCard title="Total Teachers" value="18" icon={UserCog} />
        <StatCard title="Attendance Rate" value="89%" icon={BarChart3} />
        <StatCard title="Active Notices" value="12" icon={Bell} />
      </div>

      <div className="bg-white rounded-2xl p-4 sm:p-6 border">
        <h3 className="font-semibold mb-4 text-sm sm:text-base">
          Quick Actions
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button className="btn">Add Student</button>
          <button className="btn">Add Teacher</button>
          <button className="btn">Publish Notice</button>
          <button className="btn">View Reports</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
