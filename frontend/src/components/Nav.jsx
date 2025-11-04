import { BookCheckIcon, LayoutDashboardIcon, Sparkles } from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router'
import ProblemPage from './../pages/ProblemPage';
import { UserButton } from '@clerk/clerk-react';

function Nav() {
    const location = useLocation();
    return (
        <div className="max-w-[1440px] mx-auto my-0 p-0">
            <div className='w-full shadow-2xl sticky flex justify-between md:px-20 px-2 py-5 items-center'>

                {/* Logo section */}
                <Link to="/dashboard"
                    className="flex justify-center items-center cursor-pointer "
                >
                    <Sparkles />
                    <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-linear-90 from-green-950 to-green-500">Talent IQ</h3>
                </Link>

                {/* Menu Items */}
                <div className='w-fit flex justify-between items-center gap-5'>
                    <Link to={"/dashboard"}>
                        <button className={` btn btn-secondary rounded-md hover:border-dotted ${location.pathname === "/dashboard" ? "border-dotted" : ""}`}><LayoutDashboardIcon className={` ${location.pathname === "/dashboard" ? "" : ""}`} /> <span className='hidden md:inline-block'>Dashbord</span></button>
                    </Link>

                    <Link to={"/problem-page"}>
                        <button className={`btn btn-secondary rounded-md hover:border-dotted ${location.pathname === "/problem-page" ? "border-dotted" : ""}`}><BookCheckIcon className={` ${location.pathname === "/problem-page" ? "  " : ""}`} /> <span className='hidden md:inline-block'>Problems</span></button>
                    </Link>
                    <div >
                        <UserButton      />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav