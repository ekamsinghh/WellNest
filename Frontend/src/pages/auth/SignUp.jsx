import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import {API_PATHS} from "../../utils/apiPaths";
import axiosInstance from "../../utils/axiosInstance";
const SignUp = () => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!name){
      setError("Please enter your name");
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if(!password || !confirmPassword) {
      setError("Password fields can't be empty");
      return;
    }
    if(password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    try{
        const response = await axiosInstance.post(API_PATHS.AUTH.SIGNUP,{
          email,
          password
        });
        const { token } = response.data.data;
                
        if(token){
            localStorage.setItem("token",token);
            navigate("/dashboard");
        }
        setError(null);
      }
      catch(err){
          if(err.response && err.response.data.error){
              setError(err.response.data.error);
          }
          else{
              setError("Something went wrong. PLease try again.")
          }
      }
  }
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Create Account
        </h2>
        <form 
        onSubmit={handleSubmit}
        className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              onChange={(e)=> {
                setName(e.target.value);
                setError(null);
              }}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg bg-black/40 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Email</label>
            <input
            onChange={(e)=> {
              setEmail(e.target.value);
              setError(null);
            }}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-black/40 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Password</label>
            <input
              type="password"
              onChange = {(e) => {setPassword(e.target.value); setError(null);}}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-black/40 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Confirm Password</label>
            <input
              type="password"
              onChange = {(e) =>{ setConfirmPassword(e.target.value); setError(null);}}
              placeholder="Confirm your password"
              className="w-full px-4 py-3 rounded-lg bg-black/40 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error? (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          ):(
            <></>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold shadow-lg hover:scale-105 active:scale-95"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
