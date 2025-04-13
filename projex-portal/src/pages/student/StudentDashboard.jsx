import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserCircle, FaBook, FaBell, FaClipboardList } from "react-icons/fa";

const StudentDashboard = () => {
  const [student, setStudent] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const studentId = localStorage.getItem("studentId");

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const [profileRes, assignmentsRes, notificationsRes] = await Promise.all([
          axios.get(`http://localhost:5050/api/student/${studentId}`),
          axios.get(`http://localhost:5050/api/student/${studentId}/assignments`),
          axios.get(`http://localhost:5050/api/student/${studentId}/notifications`)
        ]);

        setStudent(profileRes.data);
        setAssignments(assignmentsRes.data);
        setNotifications(notificationsRes.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch student dashboard data:", err);
      }
    };

    if (studentId) {
      fetchStudentData();
    } else {
      console.warn("No student ID found in localStorage.");
      setLoading(false);
    }
  }, [studentId]);

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (!student) return <div className="p-6 text-center text-red-600">Student not found.</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Welcome, {student.name} 👋</h1>
        <p className="text-sm text-gray-600">ID: {student._id} | Role: {student.role}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Profile */}
        <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
          <FaUserCircle className="text-3xl text-blue-500" />
          <div>
            <h2 className="text-lg font-semibold">Profile</h2>
            <p className="text-sm text-gray-500">Email: {student.email}</p>
            <p className="text-sm text-gray-500">Role: {student.role}</p>
          </div>
        </div>

        {/* GPA */}
        <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
          <FaBook className="text-3xl text-green-500" />
          <div>
            <h2 className="text-lg font-semibold">Current GPA</h2>
            <p className="text-2xl text-green-700 font-bold">{student.gpa || "N/A"}</p>
          </div>
        </div>

        {/* Assignments */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center gap-2 mb-2">
            <FaClipboardList className="text-xl text-purple-500" />
            <h2 className="text-lg font-semibold">Upcoming Assignments</h2>
          </div>
          <ul className="text-sm text-gray-600 space-y-1">
            {assignments.length > 0 ? (
              assignments.map((a, i) => (
                <li key={i} className="flex justify-between">
                  <span>{a.title}</span>
                  <span className="text-gray-400">{a.dueDate}</span>
                </li>
              ))
            ) : (
              <li>No assignments found</li>
            )}
          </ul>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl shadow p-5 lg:col-span-2">
          <div className="flex items-center gap-2 mb-2">
            <FaBell className="text-xl text-yellow-500" />
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>
          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
            {notifications.length > 0 ? (
              notifications.map((n, i) => <li key={i}>{n.message}</li>)
            ) : (
              <li>No notifications yet</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
