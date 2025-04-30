import React from "react";
import "./Loader.css"; // Make sure CSS is imported

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-white">
      <div className="relative w-44 h-44 pan-loader">
        {/* Rotating Red Circle */}
        <div className="absolute top-[10%] left-0 w-[60%] h-[45%] border-[10px] border-transparent border-b-red-500 rounded-full loader"></div>

        {/* Pan Container */}
        <div className="flex w-full pan-container">
          {/* Pan */}
          <div className="w-[60%] h-5 bg-gradient-to-b from-black to-gray-800 rounded-b-xl pan"></div>

          {/* Handle */}
          <div className="w-[40%] h-2.5 bg-gradient-to-b from-black to-gray-800 rounded-xl handle"></div>
        </div>

        {/* Shadow */}
        <div className="absolute top-[65%] left-[15%] w-[30%] h-2 bg-gray-300 rounded-xl shadow"></div>
      </div>
    </div>
  );
};

export default Loader;
