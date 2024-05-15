// Sidebar.js
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed ${isOpen ? "left-0" : "-left-full"} top-0 h-screen ${
        isOpen ? "w-1/5" : "w-0"
      } bg-white p-4 transition duration-300 ease-in-out md:w-1/6 md:left-0 bg-white/90 shadow-lg ring-1 ring-black/5`}
    >
      <button
        className="absolute top-0 right-0 mt-4 mr-4 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      <div className="text-center">
        <h2 className="text-lg font-bold mb-4">Sidebar</h2>
        <ul>
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-gray-600 hover:text-gray-900"
            >
              Link 1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-gray-600 hover:text-gray-900"
            >
              Link 2
            </a>
          </li>
          {/* more links */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
