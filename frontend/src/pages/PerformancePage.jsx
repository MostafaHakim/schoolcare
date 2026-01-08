import { TrendingUp, Calendar, Download } from 'lucide-react';
import { useState } from 'react';

const PerformancePage = () => {
  const [selectedMonth, setSelectedMonth] = useState('August 2025');

  const performanceStats = {
    today: {
      present: 20,
      absent: 2,
      late: 2,
      total: 24
    },
    thisMonth: {
      present: 18,
      late: 3,
      absent: 1,
      total: 22
    },
    average: {
      good: 84,
      bad: 34
    }
  };

  const calendarDays = [
    [28, 29, 30, 31, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
    [1, 2, 3, 4, 5, 6, 7],
  ];

  const attendanceHistory = [
    { date: '2025-08-01', status: 'present' },
    { date: '2025-08-02', status: 'present' },
    { date: '2025-08-03', status: 'late' },
    { date: '2025-08-04', status: 'present' },
    { date: '2025-08-05', status: 'absent' },
    { date: '2025-08-06', status: 'present' },
    { date: '2025-08-07', status: 'present' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'present': return 'bg-green-100 text-green-800';
      case 'absent': return 'bg-red-100 text-red-800';
      case 'late': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Average Performance */}
                    <div className="bg-white rounded-3xl p-5 border border-gray-100 space-y-4">
          
                        {/* Title */}
                        <h3 className="text-base font-semibold text-gray-800">
                          Average performance
                        </h3>
          
                        {/* Today | Present */}
                        <div className="flex items-center justify-between border rounded-2xl px-4 py-3">
                          <span className="text-gray-700 font-medium">Today</span>
          
                          <span className="w-px h-5 bg-gray-300"></span>
          
                          <span className="flex items-center gap-2 font-medium text-gray-700">
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            Present
                          </span>
                        </div>
          
                        {/* Present | Absent | Late */}
                        <div className="flex justify-between items-center border rounded-2xl px-4 py-4 text-sm">
          
                          <div className="flex flex-col items-center flex-1">
                            <span className="text-green-600 font-medium">Present</span>
                            <span className="text-gray-800 mt-1">20 Days</span>
                          </div>
          
                          <span className="w-px h-8 bg-gray-300"></span>
          
                          <div className="flex flex-col items-center flex-1">
                            <span className="text-red-500 font-medium">Absent</span>
                            <span className="text-gray-800 mt-1">02 Days</span>
                          </div>
          
                          <span className="w-px h-8 bg-gray-300"></span>
          
                          <div className="flex flex-col items-center flex-1">
                            <span className="text-yellow-500 font-medium">Late</span>
                            <span className="text-gray-800 mt-1">02 Days</span>
                          </div>
                        </div>
          
                        {/* Average Performance Progress */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium text-gray-800">
                              Average performance
                            </span>
          
                            <span className="flex items-center gap-2 text-red-500 font-medium">
                              <span className="text-purple-500 tracking-widest">············→</span>
                              Bad
                            </span>
                          </div>
          
                          {/* Progress bar */}
                          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: '34%',
                                background:
                                  'linear-gradient(90deg, #22c55e, #facc15, #fb7185)',
                              }}
                            />
                          </div>
          
                          {/* Percent */}
                          <div className="flex justify-between text-xs">
                            <span className="text-red-500 font-medium">34%</span>
                            <span className="text-purple-500 font-medium">100%</span>
                          </div>
                        </div>
          
                    </div>
          
          
                  {/* Monthly Status */}
              <div className="bg-white rounded-3xl p-5 border border-gray-100 space-y-4">
          
            {/* Title */}
                    <h3 className="text-base font-semibold text-gray-800">
                      This Month
                    </h3>
          
                    {/* ===== Present ===== */}
                    <div className="border rounded-2xl p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
                        <div className="w-4 h-4 bg-gradient-to-br from-gray-300 to-yellow-400 rounded-full" />
                      </div>
          
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="text-green-600 font-medium">Present</span>
                          <span className="text-gray-700">20 Days</span>
                        </div>
                        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full w-[70%] bg-green-600 rounded-full" />
                        </div>
                      </div>
                    </div>
          
                    {/* ===== Late ===== */}
                    <div className="border rounded-2xl p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-yellow-50 flex items-center justify-center">
                        <div className="w-4 h-4 bg-yellow-400 rounded-sm" />
                      </div>
          
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="text-yellow-500 font-medium">Late</span>
                          <span className="text-gray-700">02 Days</span>
                        </div>
                        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full w-[15%] bg-yellow-400 rounded-full" />
                        </div>
                      </div>
                    </div>
          
                    {/* ===== Absent ===== */}
                    <div className="border rounded-2xl p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center">
                        <div className="w-4 h-4 bg-red-500 rotate-45 rounded-sm" />
                      </div>
          
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="text-red-500 font-medium">Absent</span>
                          <span className="text-gray-700">02 Days</span>
                        </div>
                        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full w-[15%] bg-red-500 rounded-full" />
                        </div>
                      </div>
                    </div>
          
                  </div>
          
          
                  {/* Calendar */}
                  <div className="bg-white rounded-2xl p-5 border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm font-semibold text-gray-700">
                        August 2025
                      </h3>
                      <Calendar size={18} />
                    </div>
          
                    <div className="grid grid-cols-7 gap-2 text-center">
                      {calendarDays.flat().map((day, i) => (
                        <div
                          key={i}
                          className={`w-8 h-8 flex items-center justify-center text-sm rounded-full
                          ${
                            day === 14
                              ? 'bg-[#6C5DD3] text-white'
                              : 'text-gray-600 hover:bg-[#F1EDFF]'
                          }`}
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
    </div>
  );
};

export default PerformancePage;