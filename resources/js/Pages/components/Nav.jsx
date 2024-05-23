// Nav.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import { GithubFill, ThreeLineHorizontal } from "akar-icons";
import Swal from "sweetalert2";

const Nav = ({ onSearchChange, searchTerm }) => {
    const [search, setSearch] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSearchChange = (e) => {
        const newValue = e.target.value;
        setSearch(newValue);
        console.log("Input Search Updated to:", newValue); // Debugging
        onSearchChange(newValue);
    };

    return (
        <nav className="sticky top-0 left-0 w-full py-4 bg-white/90 shadow-lg ring-1 ring-black/5">
            <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center gap-4">
                    <div className="md:hidden">
                        <button
                            className="rounded-md border-2 border-gray-600 p-2"
                            aria-label="Hamburger Menu"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <ThreeLineHorizontal size={26} strokeWidth={2} />
                        </button>
                    </div>
                    <div className="flex justify-end">
                        <input
                            type="text"
                            placeholder="Search"
                            className="rounded-md border-2 border-gray-600 p-2 mr-2 md:w-full md:max-w-md"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <a
                        href="https://github.com/d4xwrld/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border-2 border-gray-600 p-2"
                        aria-label="GitHub Icon"
                    >
                        <GithubFill strokeWidth={2} size={26} />
                    </a>
                </div>
            </div>
            {menuOpen && (
                <div
                    className="fixed top-0 left-0 h-screen w-full bg-gray-200 p-4 transition duration-300 ease-in-out md:w-1/5"
                    onClick={() => setMenuOpen(false)}
                >
                    <div className="flex justify-center items-center h-full">
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
                                    onClick={() =>
                                        Swal.fire({
                                            title: "About Projects",
                                            text: "This is a simple project that I made to learn how to use React and Tailwind CSS. I hope you like it!",
                                        })
                                    }
                                    className="block py-2 px-4 text-gray-600 hover:text-gray-900"
                                >
                                    About Project!
                                </a>
                            </li>
                            {/* more links */}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

Nav.propTypes = {
    onSearchChange: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired,
};

export default Nav;
