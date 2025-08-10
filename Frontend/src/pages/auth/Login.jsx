import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

const Login = () => {
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [error,setError] = useState(null);
  const [eye,setEye] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)){
      setError("Please enter a valid email address");
      return;
    }

    if(!password){
      setError("Please enter a password");
      return;
    }

    setError(null);

    //API Handling
      try{
        const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN,{
          email,
          password
        });
        const { token } = response.data.data;
                
        if(token){
            localStorage.setItem("token",token);
            navigate("/dashboard");
        }
      }
      catch(err){
        console.log(err);
          if(err.response && err.response.data.message){
              setError(err.response.data.message);
          }
          else{
              setError("Something went wrong. PLease try again.")
          }
      }
  }
  
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div
      className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Login
        </h2>
        <form className="space-y-5" onSubmit= {handleSubmit}>
          <div>
            <label className="block text-sm text-gray-300 mb-2">Email</label>
            <input
              type="email"
              onChange={(event)=>{
                setEmail(event.target.value);
              }}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-black/40 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Password</label>
            <input
              type={eye?"text":"password"}
              onChange={(event)=>{
                setPassword(event.target.value);
              }}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-black/40 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              </input>
          </div>
          {error? (<p className="text-red-500 text-sm relative left-3">{error}</p>):(
            <></>
          )}
          <button
            type="submit"
            className="w-full font-semibold py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white shadow-lg hover:scale-105 active:scale-100"
          >
            Login
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-6 text-center">
          New user?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;