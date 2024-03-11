import React, { Children, useState } from 'react'
import { FaFingerprint, FaGripLines } from "react-icons/fa";
import Menu from '../component/Menu';
import { Head } from '@inertiajs/react';

function Layout({ children, title }) {
    const [expanded, setExpanded] = useState(true);
    return (
        <div>

            <Head title={title}/>
            <div className="drawer lg:drawer-open fixed">
                <div className="drawer-content flex flex-col h-screen">
                    {/* Header */}
                    <div className="navbar bg-base-100 shadow-xl z-7 rounded">
                        <div className="flex-1">
                            <a className="btn btn-ghost text-xl">daisyUI</a>
                        </div>
                        <div className="flex-none gap-2 ">
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="input input-bordered w-24 md:w-auto"
                                />
                            </div>
                            <div className="dropdown dropdown-hover dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar ">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>Settings</a>
                                    </li>
                                    <li>
                                        <a>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* / Header */}

                    {/* Main Or Routing */}
                    <main className="flex-1 md:pt-4 pt-4 px-6 overflow-y-auto bg-base-200">
                        <div className="flex flex-col w-full">
                            <div className="gridcard bg-white rounded-lg place-items-center">
                                <div className="container mx-auto p-5">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </main>
                    {/* /Main */}
                </div>

                {/* LEFT */}
                <div>
                    <aside className="h-screen flex-1">
                        <nav className="h-full flex flex-col bg-slate-800 border-r shadow-sm">
                            <div
                                className={`${expanded ? "md:p-4 p-1 md:justify-between justify-center" : "p-1 justify-center"
                                    } flex  items-center bg-slate-200 bg-gradient-to-tr m-2 rounded-md`}>
                                <img
                                    src="http://img.logoipsum.com/243.svg"
                                    className={`overflow-hidden transition-all ${expanded ? "md:w-32 w-0" : "md:w-0 w-0"
                                        }`}
                                    alt=""
                                />
                                <button
                                    onClick={() => setExpanded((curr) => !curr)}
                                    className={`p-2 ${expanded ? "font-bold" : "text-slate-800"
                                        }  rounded-sm  bg-gradient-to-tr hover:bg-slate-400 `}>
                                    <FaGripLines />
                                </button>
                            </div>
                            <hr className="mx-3 my-2" />
                            <ul className="flex-1 px-3">
                                <Menu expanded={expanded} />
                            </ul>
                            <div className="border-t flex p-3">
                                <img
                                    src="http://img.logoipsum.com/243.svg"
                                    className="w-10 h-8 rounded-md bg-white px-1"
                                    alt=""
                                />
                                <div
                                    className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "md:w-52 w-0 ml-3" : "md:w-0 w-0"
                                        }`}>
                                    <div className="leading-4">
                                        <h4 className="font-semibold text-white">Feri Dev</h4>
                                        <span className="text-xs text-yellow-50">
                                            Feri.anonymous123@mail.com
                                        </span>
                                    </div>
                                    <span className="text-white">
                                        <FaFingerprint />
                                    </span>
                                </div>
                            </div>
                        </nav>
                    </aside>
                </div>
                {/* /LEFT */}
            </div>
        </div>
    )
}

export default Layout
