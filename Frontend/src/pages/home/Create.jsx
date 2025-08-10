import React, { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("draft");
  const navigate = useNavigate();


  const handleSubmit =async (e) => {
    e.preventDefault();

    if(title==""){
      setError("Title field can't be empty");
      return;
    }

    try{
        const response = await axiosInstance.post(API_PATHS.SESSION.CREATE,{
            title,
            url,
            tags,
            status
        });

        if(response.data.data){
            navigate("/dashboard");
        }
    }
    catch(err){
        console.log(err);
    }

  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800/90 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-700"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Create New Session
        </h2>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Title</label>
          <input
            type="text"
            name="title"
            onChange={(e)=>{
                setTitle(e.target.value);
            }}
            placeholder="Enter session title"
            className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Tags</label>
          <input
            type="text"
            onChange={(e)=>{
                let res= e.target.value.split(',')
                setTags(res);
            }}
            placeholder="Should be comma separated"
            className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">JSON File URL</label>
          <input
            type="text"
            onChange={(e)=>{
              setUrl(e.target.value);
            }}
            placeholder="Paste your JSON file link"
            className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>
        {error?(
          <p className="text-red-500 font-semibold relative bottom-2.5">{error}</p>
        ):(<></>)}
        <br></br>
        <div className="flex justify-around">
            <button
            onClick={()=>{
                setStatus("published");
            }}
            type="submit"
            className=" w-[45%] p-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition hover:scale-105 active:scale-100 cursor-pointer"
            >
            Publish
            </button>
            <button
            onClick={()=>{
                setStatus("draft");
            }}
            type="submit"
            className="w-[45%] p-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition hover:scale-105 active:scale-100 cursor-pointer"
            >
            Draft
            </button>
        </div>
        
      </form>
    </div>
  );
};

export default Create;
