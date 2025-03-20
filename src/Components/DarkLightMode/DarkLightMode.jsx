import React, { useState, useEffect } from "react";
import "./DarkLightMode.css";
import {  FaMoon, FaSun } from "react-icons/fa"; 

const DarkLightMode = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="logo">📄 Note</div>

      

      <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-toggle contbtn">
        {darkMode ? <FaSun/> : <FaMoon/>}
      </button>
    </nav>
  );
};

export default DarkLightMode;
