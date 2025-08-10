import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }

  const fetch = async () => {
    try{
      const response = await axiosInstance.get(API_PATHS.SESSION.GET_PUBLISHED);
      if(response.data.data){
        setSessions(response.data.data);
      }
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    fetch();
    setTimeout(() => setAnimateCards(true), 100);
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-4">
      {/* Navbar */}
      <header className="flex justify-between items-center mb-8 border-b-1 pb-4">
        <h1 className="text-2xl font-bold tracking-wide">Wellnest Dashboard</h1>
        <div className="hidden md:flex space-x-6">
          <button 
          onClick={()=>{
            navigate('/managesessions');
          }}
          className="cursor-pointer text-lg font-semibold hover:text-blue-300 ">
            Sessions
          </button>
          <button 
          onClick={()=>{
            navigate('/create');
          }}
          className="cursor-pointer border-1 p-1 pl-3 pr-3 rounded-full text-white bg-gradient-to-r from-[#0644d4] to-[#3aa5ed] scale-110 hover:scale-115 active:scale-100"
          >Create +</button>
          <button 
          onClick={()=>{
            logout();
          }}
          className="cursor-pointer block text-red-500 font-semibold">Logout</button>
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
          to='/managesessions'
          className="cursor-pointer block hover:text-blue-400">Sessions</Link>
          <button 
          onClick={()=>{
            logout();
          }}
          className=" cursor-pointer block text-red-500 font-semibold">Logout</button>
          <button onClick={()=>{
            navigate('/create');
          }}
          className="cursor-pointer border-1 p-1 pl-3 pr-3 rounded-full text-white bg-gradient-to-r from-[#0644d4] to-[#3aa5ed]  hover:scale-105 active:scale-100"
          >Create +</button>
        </div>
      )}

      {/* Sessions Grid */}
      {sessions.length? (
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sessions.map((session, index) => (
          <div
            key={session.id}
            className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg transform transition-all duration-700 ease-out border-2 hover:scale-105
              ${animateCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <h2 className="text-2xl text-white font-bold mb-2">{session.title}</h2>
            {session.tags.map((tag,index) => (
              <h3
              key={index}
               className="inline p-1 pl-2 pr-2 ml-1 rounded-full text-xs border-2 border-yellow-600 text-white font-semibold text-center">{tag}</h3>
            ))}
            <p className="text-green-400 font-semibold mt-2">Published 🎉</p>
            <button className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
              View Details
            </button>
          </div>
        ))}
      </section>
      ):(
        <div className="text-center text-xl md:text-2xl font-semibold text-[#00d9ff]">
          No published Sessions . . .</div>
      )}
    </div>
  );
};

export default Dashboard;
