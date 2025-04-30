import React, { useState } from 'react';

export default function Login() {
  // Define state to control login/signup view
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Login Section */}
      <div
        className={`transition-all duration-500 flex flex-col items-center justify-center w-1/1 p-8 bg-white ${
          isLogin ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        <h1 className="text-4xl font-bold">Welcome to our website</h1>
        <p className="text-gray-500 mb-6">Sign in using your favorite social network</p>
        <div className="flex space-x-4 mb-6">
          <i className="fab fa-facebook-f text-yellow-600 text-3xl cursor-pointer"></i>
          <i className="fab fa-google-plus-g text-red-500 text-3xl cursor-pointer"></i>
          <i className="fab fa-linkedin-in text-yellow-800 text-3xl cursor-pointer"></i>
        </div>
        <div className="w-80 border-t text-center mt-4 relative">
          <span className="bg-white px-2 absolute -top-3 left-1/2 transform -translate-x-1/2">OR</span>
        </div>
        <form className="flex flex-col w-80 mt-6">
          <input className="p-3 border rounded mb-3" type="email" placeholder="Email" />
          <input className="p-3 border rounded mb-3" type="password" placeholder="Password" />
          <button className="bg-amber-300 text-white py-3 rounded mt-3">Sign in</button>
        </form>
      </div>

      {/* Switch Section */}
      <div className="flex flex-col justify-center items-center w-1/1 bg-amber-300 text-white p-6">
        <h1 className="text-xl font-semibold mb-2">
          {isLogin ? "Not yet a member?" : "Already have an account?"}
        </h1>
        <p className="text-sm text-center">
          {isLogin ? "Sign up and discover what we can do for you" : "Sign in and continue where you left off"}
        </p>
        <button
          className="bg-white text-yellow-500 px-6 py-2 mt-4 rounded"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Sign up" : "Sign in"}
        </button>
      </div>

      {/* Signup Section */}
      <div
        className={`transition-all duration-500 flex flex-col items-center justify-center w-1/1 p-8 bg-white ${
          !isLogin ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        <h1 className="text-4xl font-bold">Create a new account</h1>
        <p className="text-gray-500 mb-6">Sign up using your favorite social network</p>
        <div className="flex space-x-4 mb-6">
          <i className="fab fa-facebook-f bg-amber-300 text-3xl cursor-pointer"></i>
          <i className="fab fa-google-plus-g text-red-500 text-3xl cursor-pointer"></i>
          <i className="fab fa-linkedin-in bg-amber-300 text-3xl cursor-pointer"></i>
        </div>
        <div className="w-80 border-t text-center mt-4 relative">
          <span className="bg-white px-2 absolute -top-3 left-1/2 transform -translate-x-1/2">OR</span>
        </div>
        <form className="flex flex-col w-80 mt-6">
          <div className="flex space-x-3">
            <input className="p-3 border rounded w-1/2" type="text" placeholder="First Name" />
            <input className="p-3 border rounded w-1/2" type="text" placeholder="Last Name" />
          </div>
          <input className="p-3 border rounded my-3" type="email" placeholder="Email" />
          <input className="p-3 border rounded mb-3" type="password" placeholder="Password" />
          <div className="flex items-center my-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">
              I have read the <a href="#" className="text-yellow-500">terms and conditions</a>
            </span>
          </div>
          <button className="bg-amber-300 text-white py-3 rounded mt-3">Sign up</button>
        </form>
      </div>
    </div>
  );
}
