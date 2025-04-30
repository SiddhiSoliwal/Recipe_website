import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Recipes from "./Component/Recipes";
import Loader from "./Component/Loader"; // Loader import किया
import Login from "./Component/Login";
import "./index.css";

const TracingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 text-4xl pointer-events-none transition-transform duration-75 ease-out"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      🥗
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const location = useLocation(); // Get the current route path

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4500);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-700 relative overflow-hidden">
      {loading ? (
        <div className={`fixed inset-0 flex justify-center items-center transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
          <Loader />
        </div>
      ) : (
        <>
          <TracingCursor />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          {/* Render Footer only if the current page is not "/login" */}
          {location.pathname !== "/login" && <Footer />}
        </>
      )}
    </div>
  );
}

export default App;
