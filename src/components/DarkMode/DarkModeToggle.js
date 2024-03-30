import React from 'react';
import { ReactComponent as SunIcon } from './Sun.svg'; // Import the sun icon
import { ReactComponent as MoonIcon } from './Moon.svg'; // Import the moon icon

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div
      className="fixed bottom-4 right-4 flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 p-1 cursor-pointer hover:bg-gray-400"
      onClick={toggleDarkMode}
    >
      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
        {isDarkMode ? <SunIcon className="w-6 h-6 text-yellow-500" /> : <MoonIcon className="w-6 h-6 text-gray-600" />}
      </div>
    </div>
  );
};

export default DarkModeToggle;
