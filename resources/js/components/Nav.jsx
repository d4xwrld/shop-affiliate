// Nav.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import { GithubFill } from "akar-icons";
import { ThreeLineHorizontal } from "akar-icons";
import Swal from "sweetalert2";

const Nav = () => {
    const [search, setSearch] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 left-0 w-full py-4 bg-white/90 shadow-lg ring-1 ring-black/5">
            <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center gap-4">
                    {/* Add hamburger menu on mobile view */}
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
                            className={`rounded-md border-2 border-gray-600 p-2 mr-2 md:w-full md:max-w-md`}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
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
                    <div className="flex justify-center items-center h-full text-center">
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
                                <span
                                    onClick={() =>
                                        Swal.fire({
                                            title: "About Projects",
                                            text: "Project Ujikom Kelas 11 oleh M. Reyhan Fadillah dari XI - RPL 1, Menggunakan ReactJS, InertiaJS, Laravel, MySql, Sweealert2, dan Tailwind CSS",
                                        })
                                    }
                                    className="block py-2 px-4 text-gray-600 hover:text-gray-900"
                                >
                                    About Project!
                                </span>
                            </li>
                            {/* more links */}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

Nav.propTypes = {};

export default Nav;
