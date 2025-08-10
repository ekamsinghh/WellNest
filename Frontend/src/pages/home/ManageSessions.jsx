import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
import { MdOutlinePublish } from "react-icons/md";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

const ManageSessions = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const [sessions, setSessions] = useState([]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }

  const fetch = async () => {
    try{
      const response = await axiosInstance.get(API_PATHS.SESSION.GET_ALL);
      if(response.data.data){
        setSessions(response.data.data);
      }
    }
    catch(err){
      console.log(err);
    }
  }
  const toggleStatus = async (id,cur_status) => {
    try{
        const status = cur_status == "published" ? "draft" : "published";
        const response = await axiosInstance.post(API_PATHS.SESSION.TOGGLE,{
            id,
            status
        });
        if(!response){
            return;
        }
    }
    catch(err){
        return;
    }
    setSessions((prev) =>
      prev.map((s) =>
        s._id === id
          ? { ...s, status: s.status === "published" ? "draft" : "published" }
          : s
      )
    );
  };

  useEffect(()=>{
    fetch();
  },[]);
  const deleteSession =async (id) => {
    try{
        const response = await axiosInstance.delete(API_PATHS.SESSION.DELETE(id));
        fetch();
        if(!response.data.data.success){
            return;
        }
        
    }
    catch(err){
        console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      {/* Navbar */}
      <header className="flex justify-between items-center mb-8 border-b border-gray-700 pb-4">
        <h1 className="text-2xl font-bold tracking-wide">Manage Your Sessions</h1>
        <div className="hidden md:flex space-x-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="cursor-pointer text-lg font-semibold hover:text-blue-300"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate("/create")}
            className="cursor-pointer border p-1 px-3 rounded-full text-white bg-gradient-to-r from-[#0644d4] to-[#3aa5ed] scale-110 hover:scale-115 active:scale-100"
          >
            Create +
          </button>
          <button
            onClick={logout}
            className="cursor-pointer block text-red-500 font-semibold"
          >
            Logout
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="bg-gray-900 rounded-lg shadow-lg p-4 space-y-4 mb-4 animate-fadeIn">
          <Link
            to="/dashboard"
            className="cursor-pointer block hover:text-blue-400"
          >
            Dashboard
          </Link>
          <button
            onClick={logout}
            className="cursor-pointer block text-red-500 font-semibold"
          >
            Logout
          </button>
          <button
            onClick={() => navigate("/create")}
            className="cursor-pointer border p-1 px-3 rounded-full text-white bg-gradient-to-r from-[#0644d4] to-[#3aa5ed] hover:scale-105 active:scale-100"
          >
            Create +
          </button>
        </div>
      )}

      {/* Session List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sessions.map((session) => (
          <div
            key={session._id}
            className="bg-gray-800 border border-gray-400 p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl font-bold mb-2">{session.title}</h2>
            <p className="text-sm text-gray-400 mb-3">
              Tags: {session.tags.join(", ")}
            </p>
            <p
              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                session.status === "published"
                  ? "bg-green-600"
                  : "bg-yellow-500 text-black"
              }`}
            >
              {session.status}
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => toggleStatus(session._id, session.status)}
                className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:scale-105 transition"
              >
                <MdOutlinePublish />
                {session.status === "published" ? "Unpublish" : "Publish"}
              </button>
              <button
                onClick={() => deleteSession(session._id)}
                className="flex items-center gap-2 px-3 py-1 bg-red-600 rounded-lg hover:scale-105 transition"
              >
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageSessions;
