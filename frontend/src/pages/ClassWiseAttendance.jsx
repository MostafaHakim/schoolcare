import { Link, useParams } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import CalendarHeader from "../components/CalendarHeader";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useStudent } from "../contexts/studentContext";
import { useAttendance } from "../contexts/AttendanceContext";
import { format, parseISO } from "date-fns";
import { toast } from "react-toastify";

const ClassWiseAttendance = () => {
  const { name } = useParams();
  const { user } = useAuth();
  const { createAttendance, attendanceRecords, fetchAttendance } =
    useAttendance();
  const { fetchClassWiseStudent, classStudents, loading } = useStudent();

  const [attendanceData, setAttendanceData] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    school: "",
    classId: "",
    date: "",
    students: [],
  });

  const formatDateForAPI = (date) => {
    return format(date, "yyyy-MM-dd");
  };

  const formatDateForDisplay = (date) => {
    return format(date, "dd MMM yyyy");
  };

  const findAttendanceForDate = () => {
    if (!attendanceRecords || attendanceRecords.length === 0) return null;

    const formattedSelectedDate = formatDateForAPI(selectedDate);

    return attendanceRecords.find((record) => {
      try {
        let recordDate;
        if (record.date instanceof Date) {
          recordDate = format(record.date, "yyyy-MM-dd");
        } else if (typeof record.date === "string") {
          recordDate = format(new Date(record.date), "yyyy-MM-dd");
        } else {
          return false;
        }
        return recordDate === formattedSelectedDate;
      } catch (error) {
        console.error("Error parsing date:", error);
        return false;
      }
    });
  };

  const currentAttendanceRecord = findAttendanceForDate();

  useEffect(() => {
    if (!user?.school || !name) {
      return;
    }

    fetchClassWiseStudent(name, user?.school);

    const formattedDate = formatDateForAPI(selectedDate);
    fetchAttendance(user?.school, name, formattedDate);
  }, [name, user?.school, selectedDate]);

  useEffect(() => {
    if (classStudents.length === 0) return;

    if (currentAttendanceRecord) {
      const existingData = {};
      currentAttendanceRecord.students.forEach((student) => {
        existingData[student.student] = student.status;
      });
      setAttendanceData(existingData);
      setIsEditMode(false);
    } else {
      const initialAttendanceData = {};
      classStudents.forEach((student) => {
        initialAttendanceData[student._id] = "present";
      });
      setAttendanceData(initialAttendanceData);
      setIsEditMode(true);
    }
  }, [classStudents, currentAttendanceRecord]);

  useEffect(() => {
    if (!user?.school || !name || classStudents.length === 0) {
      return;
    }

    const formattedDate = formatDateForAPI(selectedDate);
    const studentsAtt = classStudents.map((student) => ({
      student: student._id,
      status: attendanceData[student._id] || "present",
    }));

    setFormData({
      school: user?.school,
      teacher: user?.username,
      classId: name,
      date: formattedDate,
      students: studentsAtt,
    });
  }, [user, name, selectedDate, classStudents, attendanceData]);

  const handleSubmit = async () => {
    try {
      const submissionData = {
        ...formData,
        date: formatDateForAPI(selectedDate),
      };

      console.log("Submitting attendance:", submissionData);

      await createAttendance(submissionData);

      const formattedDate = formatDateForAPI(selectedDate);
      fetchAttendance(user?.school, name, formattedDate);
    } catch (err) {
      console.error("Error saving attendance:", err);
      toast.error("Error saving attendance");
    }
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleCancelEdit = () => {
    if (currentAttendanceRecord) {
      const existingData = {};
      currentAttendanceRecord.students.forEach((student) => {
        existingData[student.student] = student.status;
      });
      setAttendanceData(existingData);
    }
    setIsEditMode(false);
  };

  return (
    <div className="bg-white/90 flex flex-col space-y-4 min-h-screen">
      {/* ===== Header ===== */}
      <Header
        handleSubmit={handleSubmit}
        isEditMode={isEditMode}
        currentAttendanceRecord={currentAttendanceRecord}
        onEditClick={handleEditClick}
        onCancelEdit={handleCancelEdit}
      />

      {/* ===== Date Selector ===== */}
      <div className="p-4">
        <CalendarHeader
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>

      {/* ===== Date Info ===== */}
      <div className="px-4">
        <div className="text-center text-gray-600">
          Selected Date: {formatDateForDisplay(selectedDate)}
        </div>
      </div>

      {/* ===== Attendance Status Banner ===== */}
      {currentAttendanceRecord && !isEditMode && (
        <div className="px-4">
          <div className="bg-green-50 border border-green-200 p-3 rounded-lg flex justify-between items-center space-x-2">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-green-700 font-medium">
                Attendance already submitted for this date
              </span>
            </div>
            <button
              onClick={handleEditClick}
              className="px-4 py-2 bg-white border border-green-600 text-green-600 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors"
            >
              Edit
            </button>
          </div>
        </div>
      )}

      {isEditMode && currentAttendanceRecord && (
        <div className="px-4">
          <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-amber-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-amber-700 font-medium">
                Editing existing attendance record
              </span>
            </div>
            <button
              onClick={handleCancelEdit}
              className="px-4 py-2 bg-white border border-amber-600 text-amber-600 rounded-lg text-sm font-medium hover:bg-amber-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* ===== Attendance Summary ===== */}
      <div className="px-4">
        <div className="flex flex-col lg:flex-row bg-gray-50 p-3 rounded-lg  justify-between items-start space-y-2 lg:space-y-0 lg:items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#9542E7]"></div>
              <span className="text-sm">Present</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#FBBF24]"></div>
              <span className="text-sm">Late</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#FF4B4B]"></div>
              <span className="text-sm">Absent</span>
            </div>
          </div>
          <div className="text-sm text-gray-600 ml-4 lg:ml-0">
            Total Students: {classStudents.length}
            {currentAttendanceRecord && !isEditMode && (
              <span className="ml-2 text-green-600">• Submitted</span>
            )}
          </div>
        </div>
      </div>

      {/* ===== Attendance List ===== */}
      <div className="p-4 flex flex-col gap-4">
        {loading ? (
          <p className="text-gray-500 col-span-full text-center">Loading...</p>
        ) : classStudents.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center">
            No students found
          </p>
        ) : (
          <div className="lg:border lg:border-blue-100 rounded-xl text-xl space-y-4 lg:space-y-0">
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 p-2 border-b border-blue-100 text-xl font-semibold">
              <div className="col-span-1 grid grid-cols-3 item-center space-x-2 lg:space-x-4 ">
                <h2 className="col-span-1">Student ID</h2>
                <h2 className="col-span-1">Name</h2>
              </div>
              <div className="flex items-center justify-evenly">
                <h2>Present</h2>
                <h2>Late</h2>
                <h2>Absent</h2>
              </div>
            </div>
            {classStudents.map((item) => (
              <AttendanceCard
                key={item._id}
                studentId={item._id}
                studentRoll={item.studentId}
                name={item.name}
                attendanceData={attendanceData}
                setAttendanceData={setAttendanceData}
                isEditMode={isEditMode}
              />
            ))}
          </div>
        )}
      </div>

      {/* ===== Footer Buttons (Mobile) ===== */}
      <div className="flex lg:hidden px-4 pb-4 gap-3">
        {isEditMode ? (
          <>
            <button
              onClick={handleSubmit}
              className="flex-1 flex items-center justify-center px-8 py-3 rounded-[10px] bg-[#9542e7] text-white hover:bg-[#8338c9] transition-colors"
            >
              Publish
            </button>
            {currentAttendanceRecord && (
              <button
                onClick={handleCancelEdit}
                className="px-6 py-3 rounded-[10px] bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            )}
          </>
        ) : currentAttendanceRecord ? (
          <button
            onClick={handleEditClick}
            className="flex-1 flex items-center justify-center px-8 py-3 rounded-[10px] bg-amber-500 text-white hover:bg-amber-600 transition-colors"
          >
            Edit
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ClassWiseAttendance;

/* ===== Helper Components ===== */
const Header = ({
  handleSubmit,
  isEditMode,
  currentAttendanceRecord,
  onEditClick,
  onCancelEdit,
}) => (
  <div className="flex flex-row items-center justify-between bg-white px-4 py-4 rounded-t-2xl lg:border-b lg:border-gray-200">
    <div className="flex flex-row items-center space-x-2">
      <Link to="/teacher/classes">
        <MoveLeft className="lg:hidden" />
      </Link>
      <h1 className="text-lg font-semibold text-gray-800">Attendance</h1>
    </div>
    <div className="hidden lg:flex items-center gap-3">
      {isEditMode ? (
        <>
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center space-x-2 px-8 py-3 rounded-[10px] bg-[#9542e7] text-white hover:bg-[#8338c9] transition-colors"
          >
            Publish
          </button>
          {currentAttendanceRecord && (
            <button
              onClick={onCancelEdit}
              className="px-6 py-3 rounded-[10px] bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          )}
        </>
      ) : currentAttendanceRecord ? (
        <button
          onClick={onEditClick}
          className="flex items-center justify-center space-x-2 px-8 py-3 rounded-[10px] bg-amber-500 text-white hover:bg-amber-600 transition-colors"
        >
          Edit
        </button>
      ) : null}
    </div>
  </div>
);

const AttendanceCard = ({
  studentId,
  studentRoll,
  name,
  attendanceData,
  setAttendanceData,
  isEditMode,
}) => {
  const status = attendanceData[studentId] || "present";

  const handleClick = (newStatus) => {
    if (!isEditMode) return;

    setAttendanceData((prev) => ({
      ...prev,
      [studentId]: newStatus,
    }));
  };

  const getButtonClass = (buttonStatus) => {
    const baseClass = "p-3 lg:p-4 rounded-full border-2 transition-colors";
    const activeClass = {
      present: "border-[#9542E7] bg-[#9542E7]",
      late: "border-[#FBBF24] bg-[#FBBF24]",
      absent: "border-[#FF4B4B] bg-[#FF4B4B]",
    };
    const inactiveClass = "border-[#BFBFBF] bg-white";
    const disabledClass = !isEditMode
      ? "opacity-70 cursor-default"
      : "hover:border-gray-400";

    if (status === buttonStatus) {
      return `${baseClass} ${activeClass[buttonStatus]} ${disabledClass}`;
    }
    return `${baseClass} ${inactiveClass} ${disabledClass}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-3 text-gray-500 hover:bg-gray-50 transition-colors border border-blue-100 rounded-xl space-y-4 lg:space-y-0">
      <div className="col-span-1 flex flex-row items-center justify-between lg:grid grid-cols-3 item-center space-x-2 lg:space-x-4 ">
        <h2 className="col-span-1 font-medium order-2 lg:order-1">
          {studentRoll}
        </h2>
        <h2 className="col-span-1 font-medium order-1 lg:order-2">{name}</h2>
      </div>
      <div className="flex items-center justify-between lg:justify-evenly">
        <button
          className={getButtonClass("present")}
          onClick={() => handleClick("present")}
          title={!isEditMode ? "Read-only mode" : "Present"}
          disabled={!isEditMode}
        />
        <button
          className={getButtonClass("late")}
          onClick={() => handleClick("late")}
          title={!isEditMode ? "Read-only mode" : "Late"}
          disabled={!isEditMode}
        />
        <button
          className={getButtonClass("absent")}
          onClick={() => handleClick("absent")}
          title={!isEditMode ? "Read-only mode" : "Absent"}
          disabled={!isEditMode}
        />
      </div>
    </div>
  );
};
