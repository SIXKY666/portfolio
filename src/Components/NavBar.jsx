import React from "react";
import {Link} from "react-router-dom";
import "../index.css"
export default function NavBar() {
    return (
        <>
            <nav className="bg-stone-100 drop-shadow border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div className="flex flex-wrap justify-center items-center mx-0 ">
                    <div className="flex flex-row w-full mx-0 justify-between" id="navbar-default">
                        <ul className="flex justify-start p-4 border border-stone-100 rounded-lg bg-stone-100">
                            <li>
                                <Link to="/" className="block text-2xl font-bold py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-400">Natdanai</Link>
                            </li>
                        </ul>
                        <ul className="flex justify-end p-4 mr-9 border border-stone-100 rounded-lg bg-stone-100">
                            <li>
                                <Link to="/" className="block text-lg font-semibold py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-400">Home</Link>
                            </li>
                            <li>
                                <Link to="/projects" className="block text-lg font-semibold py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-400">Projects</Link>
                            </li>
                            <li>
                                <Link to="/about" className="block text-lg font-semibold py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-400">About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="block text-lg font-semibold py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-400">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}