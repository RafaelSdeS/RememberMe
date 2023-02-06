import React, { useState } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`bg-blue-500 hover:bg-blue-400 text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline dark:text-white dark:bg-indigo-700
          mb-5`}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;